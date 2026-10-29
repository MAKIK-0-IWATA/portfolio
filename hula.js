/* =========================================================
   プロフィール：フラダンスを踊るフラガールのピクセルアニメ
   ・80×30マスの小さなキャンバスに1マス=1pxで描き、CSSで4倍に拡大（image-rendering:pixelated）
   ・左に犬が4匹（フラガールの方を向いて、交互にぴょこぴょこ跳ねてしっぽを振る）、右はしにフラガール
   ・4コマ（左へ → 真ん中 → 右へ → 真ん中）をコマ撮りのように切り替える
   ・腰とスカートを左右にゆらし、腕は波のように左右へ流す
   ・色はロゴの4色（黄緑・黄・赤・深緑）を使う
   ・画面に見えていない時は止める。動きを減らす設定の人には1コマ目で止める
   ========================================================= */
(function () {
  const canvas = document.querySelector('.hula-girl');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const W = 80, H = 30;
  const GIRL_X = 56; // フラガールを描き始める横の位置（その左が犬のスペース）
  canvas.width = W;
  canvas.height = H;

  const C = {
    hair: '#2b1d16',
    skin: '#e8b48a',
    skinDark: '#c98e64',
    red: '#D83330',     // ロゴの赤：花・トップス
    yellow: '#E7D42F',  // ロゴの黄：花の真ん中・レイ
    green: '#B0CE82',   // ロゴの黄緑：スカート
    deep: '#115A5E',    // ロゴの深緑：スカートの影
    mouth: '#b4544a'
  };

  const px = (x, y, color) => { ctx.fillStyle = color; ctx.fillRect(x, y, 1, 1); };
  const rect = (x, y, w, h, color) => { ctx.fillStyle = color; ctx.fillRect(x, y, w, h); };

  // 2点を1マスずつの線で結ぶ（ブレゼンハムの線）。腕に使う
  function line(x0, y0, x1, y1, color) {
    const dx = Math.abs(x1 - x0), dy = -Math.abs(y1 - y0);
    const sx = x0 < x1 ? 1 : -1, sy = y0 < y1 ? 1 : -1;
    let err = dx + dy;
    for (;;) {
      px(x0, y0, color);
      if (x0 === x1 && y0 === y1) break;
      const e2 = 2 * err;
      if (e2 >= dy) { err += dy; x0 += sx; }
      if (e2 <= dx) { err += dx; y0 += sy; }
    }
  }

  // 4コマ分の「腰のゆれ」と「手の位置」。肩は左(9,10)・右(15,10)
  const FRAMES = [
    { sway: -1, left: [3, 10], leftElbow: [6, 9], right: [9, 11], rightElbow: [13, 13] },  // 両腕を左へ
    { sway: 0, left: [3, 13], leftElbow: [6, 11], right: [21, 13], rightElbow: [18, 11] }, // 両腕を横へ
    { sway: 1, left: [15, 11], leftElbow: [11, 13], right: [21, 10], rightElbow: [18, 9] }, // 両腕を右へ
    { sway: 0, left: [3, 8], leftElbow: [6, 9], right: [21, 8], rightElbow: [18, 9] }      // 両腕を少し上へ
  ];

  // 犬4匹：毛の色・耳の色・おなかの色（おなかが無い犬は null）
  const DOGS = [
    { body: '#3a3330', ear: '#1f1a18', belly: null },       // 黒
    { body: '#c99a66', ear: '#9c7040', belly: '#ead2ae' },  // 明るい茶色
    { body: '#a0673c', ear: '#6e4224', belly: null },       // 茶色
    { body: '#d08a4a', ear: '#a3622c', belly: '#f6eadb' }   // 柴犬（おなかが白）
  ];

  // 犬1匹（12×8マス・右向き）。frame で脚としっぽの形、i で跳ねるタイミングを変える
  function drawDog(x0, dog, frame, i) {
    const hop = (frame + i) % 2 === 0 ? -1 : 0;   // となりの犬と交互に1マス跳ねる
    const y0 = 21 + hop;
    const p = (x, y, c) => px(x0 + x, y0 + y, c);
    const r = (x, y, w, h, c) => rect(x0 + x, y0 + y, w, h, c);
    // しっぽ：上・下を交互に（ふりふり）
    if (frame % 2 === 0) { p(0, 1, dog.body); p(1, 2, dog.body); }
    else { p(0, 4, dog.body); p(1, 3, dog.body); }
    r(1, 3, 8, 3, dog.body);                 // 胴
    if (dog.belly) r(3, 5, 4, 1, dog.belly); // おなか
    r(7, 1, 4, 3, dog.body);                 // 頭
    r(10, 3, 2, 1, dog.body);                // 鼻すじ
    p(8, 0, dog.ear);                        // 耳
    p(7, 1, dog.ear);
    p(9, 2, '#1a1a1a');                      // 目
    p(11, 3, '#1a1a1a');                     // 鼻
    // 脚：跳ねている時は前後に開く
    [2, 4, 6, 8].forEach(x => p(x, 6, dog.body));
    if (hop) { [1, 4, 6, 9].forEach(x => p(x, 7, dog.body)); }
    else { [2, 4, 6, 8].forEach(x => p(x, 7, dog.body)); }
  }

  function drawFrame(f, frameIndex) {
    ctx.clearRect(0, 0, W, H);
    DOGS.forEach((dog, i) => drawDog(i * 14, dog, frameIndex, i));
    ctx.save();
    ctx.translate(GIRL_X, 0);
    const s = f.sway;

    // 脚（スカートの下からのぞく）と足
    rect(10 + s, 24, 2, 4, C.skin);
    rect(13 + s, 24, 2, 4, C.skin);
    rect(9 + s, 28, 3, 1, C.skinDark);
    rect(13 + s, 28, 3, 1, C.skinDark);

    // 胴体と腰（腰はゆれの分だけ横にずらす）
    rect(10, 9, 5, 5, C.skin);
    rect(9 + s, 14, 7, 2, C.skin);
    // トップス
    rect(10, 11, 5, 2, C.red);

    // 草のスカート：上の段は腰と一緒に、下の段はさらに大きくゆれる。緑と深緑を1本ずつ交互に
    for (let y = 16; y < 24; y++) {
      const off = y < 20 ? s : s * 2;
      for (let x = 8; x <= 16; x++) {
        const color = (x + (y < 20 ? 0 : 1)) % 2 ? C.green : C.deep;
        // すその両はしを少し欠いて、ギザギザに
        if (y === 23 && (x === 8 || x === 16)) continue;
        px(x + off, y, color);
      }
    }
    // スカートの腰ひも（レイと同じ黄色）
    rect(8 + s, 16, 9, 1, C.yellow);

    // 腕：肩 → ひじ → 手 を線で結ぶ
    line(9, 10, f.leftElbow[0], f.leftElbow[1], C.skin);
    line(f.leftElbow[0], f.leftElbow[1], f.left[0], f.left[1], C.skin);
    line(15, 10, f.rightElbow[0], f.rightElbow[1], C.skin);
    line(f.rightElbow[0], f.rightElbow[1], f.right[0], f.right[1], C.skin);

    // 首と頭
    rect(11, 8, 3, 1, C.skin);
    rect(9, 1, 7, 3, C.hair);          // 頭のてっぺんの髪
    rect(10, 3, 5, 5, C.skin);         // 顔
    rect(9, 3, 1, 8, C.hair);          // 左の長い髪
    rect(15, 3, 1, 8, C.hair);         // 右の長い髪
    rect(10, 3, 5, 1, C.hair);         // 前髪
    px(11, 5, C.hair);                 // 目
    px(13, 5, C.hair);
    px(12, 7, C.mouth);                // 口

    // 髪の花（ハイビスカス）
    rect(15, 0, 2, 2, C.red);
    px(17, 1, C.red);
    px(16, 2, C.red);
    px(16, 1, C.yellow);

    // レイ（首飾り）：赤と黄を交互に
    for (let x = 9; x <= 15; x++) px(x, 9, x % 2 ? C.red : C.yellow);
    px(10, 10, C.yellow);
    px(14, 10, C.yellow);
    ctx.restore();
  }

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let index = 0;
  let timer = null;
  drawFrame(FRAMES[0], 0);
  if (reduce) return;

  const start = () => {
    if (timer) return;
    timer = setInterval(() => {
      index = (index + 1) % FRAMES.length;
      drawFrame(FRAMES[index], index);
    }, 260); // 1コマ0.26秒：ピクセルアニメらしい、少しカクカクした速さ
  };
  const stop = () => { clearInterval(timer); timer = null; };

  // 画面に見えている時だけ動かす
  new IntersectionObserver(entries => {
    entries.forEach(entry => (entry.isIntersecting ? start() : stop()));
  }).observe(canvas);
})();
