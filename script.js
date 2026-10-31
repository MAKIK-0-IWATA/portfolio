'use strict';

// 制作事例のモーダルに出す中身。
// 詳細ページを作ったら、その作品に detail: './works/○○.html' を足すと「詳細を見る」ボタンが出る（無い作品はボタンを出さない）。
// position：モーダルで画像を枠いっぱいに広げた時、見せたい位置（省略すると中央）。
// fit：'contain' にすると切らずに全体を収め、余白を白にする（省略すると枠いっぱい）。
// images：画像が複数ある作品。モーダルの画像の下に小さな画像が並び、押すと切り替わる。start は最初に出す画像の番号（0から）。
// subtitle：作品名の下に小さく添える2行目（カードの見出しと同じ書き方にそろえる）。
// link：お客様のサイトなど。モーダルの本文の下にリンクとして出す。
// 元サイト（growl-lalala-design.com/works）の14件は、本文を元サイトから原文のまま転記している（\n は改行）。
const projects = {
  seminar: {
    category: 'WEB DESIGN / LP',
    title: 'オンラインセミナーのLP制作',
    description: '業種「オンラインセミナー運営」\nターゲット「40代前後　男性女性。割合は30対70。WEBデザインに興味がある人。あるいは、在宅で働ける仕事を探している人」\nご希望の内容\n・希望の配色イメージ：特に無し\n・希望イメージ：明るい印象で、信頼感があること。\n・サイズはスマホサイズ\n\n制作のポイント\nFVでユーザーがイメージしやすいよう、勉強している姿や未来の姿をイメージできるような写真を使用し、ユーザー目線で疑問点やメリットなどを説明していく。\nカウントダウン式のCTAボタンはFV直下に設置',
    images: [
      { src: './assets/works/seminar-1.jpg', alt: 'オンラインセミナー「ゼロから始めるWEBデザイン 5日間チャレンジプログラム」のLP' },
      { src: './assets/works/seminar-2.jpg', alt: 'LPのファーストビューをスマートフォンに表示したイメージ' },
      { src: './assets/works/seminar-3.jpg', alt: 'LP全体をスマートフォン画面と並べたイメージ' },
      { src: './assets/works/seminar-4.jpg', alt: 'LPのファーストビュー。「短期集中講座 ゼロから始めるWEBデザイン 5日間チャレンジプログラム」の文字と、パソコンに向かう女性の写真' },
      { src: './assets/works/seminar-5.jpg', alt: 'LPのスマートフォン版を、上から順に並べた全体像' }
    ],
    start: 2, // 最初に大きく出す画像（カードと同じもの）
    link: { label: 'デモページ', url: 'https://xs539624.xsrv.jp/portfolio/demo_seminar/index.html' }
  },
  insole: {
    category: 'WEB DESIGN / LP',
    title: '医療品（インソール）のLP制作',
    description: '業種「医療品販売」\nターゲット「老若男女」\nご希望の内容\n・O脚・X脚・猫背・外反母趾などで悩んでいる人向け\n・上質な本革で匠の職人の手で一つ一つ丹念に作成している高級インソール\n・医療機関にも採用され、特許取得もしているので、権威性や信頼感を出したい\n\n制作のポイント\nFVで権威性を示し、親しみやすい雰囲気のイラストを使用してユーザー目線に近いところから内容を説明していく。\nインソールとしては、価格設定が高いため、購入ボタンやデザインに高級感をもたせたデザインで制作。',
    images: [
      { src: './assets/works/insole-1.jpg', alt: 'インソールのLPをノートパソコンとスマートフォンに表示したイメージ' },
      { src: './assets/works/insole-2.jpg', alt: 'LPのファーストビューをスマートフォンに表示したイメージ' },
      { src: './assets/works/insole-3.jpg', alt: 'LP全体をスマートフォン画面と並べたイメージ' },
      { src: './assets/works/insole-4.jpg', alt: 'LPのスマートフォン版とPC版を、上から順に並べた全体像' }
    ],
    start: 0 // 最初に大きく出す画像（カードと同じもの）
  },
  golflp: {
    category: 'WEB DESIGN / LP',
    title: 'ゴルフスクールのLP制作',
    description: 'ターゲット「30代〜60代の男女」\nご希望の内容\n・スクールの写真を使用してほしい\n・具体的な成果を示し信頼感を出したい\n・Wixで運用・前半部分\n\n制作のポイント\nCTAボタンを挟みながら商品紹介をしていく。ユーザーのスコア改善例は、提供いただいた資料をすべて使用。',
    images: [
      { src: './assets/works/golflp-1.jpg', alt: 'ゴルフスクールのLPをノートパソコンとスマートフォンに表示したイメージ' },
      { src: './assets/works/golflp-2.jpg', alt: 'LPのファーストビューをスマートフォンに表示したイメージ' },
      { src: './assets/works/golflp-3.jpg', alt: 'LP全体をスマートフォン画面と並べたイメージ' },
      { src: './assets/works/golflp-4.jpg', alt: 'LPのファーストビュー。「5ラウンド以内に100が切れなければ全額返金！」の文字と、レッスン中の写真' },
      { src: './assets/works/golflp-5.jpg', alt: 'LPのスマートフォン版とPC版を、上から順に並べた全体像。生徒のスコア改善例が並ぶ' }
    ],
    start: 0 // 最初に大きく出す画像（カードと同じもの）
  },
  ramen: {
    category: 'WEB DESIGN / LP',
    title: '飲食店の求人LP制作',
    description: 'ラーメン店の求人LPを制作しました。\nお客様へのヒアリング内容をもとに、キャッチコピーや本文のコピーも自分で書き起こしています。\nファーストビュー（ページを開いて最初に見える部分）は、ABテスト用に2パターンを作成しています。\nA：「飲食経験ゼロから店長へ」。独立支援など、先のキャリアを前に出したパターン\nB：「まかないは食い放題だ！」「履歴書は不要」。すぐ働きたい人に向けた、気軽さを前に出したパターン\n\n制作したLPは、WordPressに実装して納品しました。',
    images: [
      { src: './assets/works/ramen-a.jpg', alt: 'ファーストビューのAパターン。赤い背景に「月収30万超え」の大きな文字と、ラーメンの写真。下に「正社員雇用」「賄いあり」「履歴書不要」' },
      { src: './assets/works/ramen-b.jpg', alt: 'ファーストビューのBパターン。赤と白の斜めの帯に「月収30万超え」「まかないは食い放題だ！」の文字と、ラーメンと湯切りをする店員の写真' }
    ],
    start: 0 // 最初に大きく出す画像（カードと同じもの）
  },
  manga: {
    category: 'SNS / AI × MANGA',
    title: 'Instagram漫画',
    subtitle: 'EC業務の「なんで？」シリーズ',
    description: 'EC実務ででてくる疑問を、1話12枚の漫画で解説するInstagram連載。AIと相談しながら、テーマ選び・構成・レイアウト・作画などを行い、細かな修正を人間がやる形で制作しています。',
    // 第2話・送料表示編の12枚（Instagramの投稿と同じ順）
    images: [
      { src: './assets/works/manga02-01.jpg', alt: 'Instagram漫画「EC業務の『なんで？』」第2話・送料表示編の表紙。「送料を書いていないだけで、10人に4人が離脱する？」という見出しと、パソコンの前で考え込む女性のイラスト' },
      { src: './assets/works/manga02-02.jpg', alt: 'Instagram漫画 第2話・送料表示編 2枚目：「送料どこ？」' },
      { src: './assets/works/manga02-03.jpg', alt: 'Instagram漫画 第2話・送料表示編 3枚目：「決済まで進めば分かる」' },
      { src: './assets/works/manga02-04.jpg', alt: 'Instagram漫画 第2話・送料表示編 4枚目：ユーザー側から見ると' },
      { src: './assets/works/manga02-05.jpg', alt: 'Instagram漫画 第2話・送料表示編 5枚目：「え、4割？」' },
      { src: './assets/works/manga02-06.jpg', alt: 'Instagram漫画 第2話・送料表示編 6枚目：4割の正体' },
      { src: './assets/works/manga02-07.jpg', alt: 'Instagram漫画 第2話・送料表示編 7枚目：表示は関係ない？' },
      { src: './assets/works/manga02-08.jpg', alt: 'Instagram漫画 第2話・送料表示編 8枚目：結局いくらかかるの？' },
      { src: './assets/works/manga02-09.jpg', alt: 'Instagram漫画 第2話・送料表示編 9枚目：保存用の数字まとめ' },
      { src: './assets/works/manga02-10.jpg', alt: 'Instagram漫画 第2話・送料表示編 10枚目：でも送料が変わる' },
      { src: './assets/works/manga02-11.jpg', alt: 'Instagram漫画 第2話・送料表示編 11枚目：書けないと何も書かない' },
      { src: './assets/works/manga02-12.jpg', alt: 'Instagram漫画 第2話・送料表示編 12枚目：まとめとフォローのお願い' }
    ],
    start: 0,
    fit: 'contain', // 縦長の漫画を切らずに見せる
    link: { label: 'Instagramで投稿を見る', url: 'https://www.instagram.com/p/DeE2MLAFA1g/' }
  },
  analysis: {
    category: 'MARKETING / ANALYSIS',
    title: 'イベントLPのマーケティング分析',
    description: 'ホテルレストランで行われるハロウィンイベントの予約を最終目的としたマーケティング分析から改善施策の提案、9月度中間報告の資料作成までを行いました。\n\n制作のポイント\nいただいたスプレッドシートのデータより情報を分析し、現状の問題の分析、改善施策案の提案\n改善施策適用後のデータの分析、さらに改善施策の考察と提案を行いました。',
    images: [
      { src: './assets/works/analysis-1.jpg', alt: 'ハロウィンイベントのマーケティング分析資料の表紙' },
      { src: './assets/works/analysis-2.jpg', alt: '改善施策をイラストで説明した資料のページ' },
      { src: './assets/works/analysis-3.jpg', alt: '分析結果と目標の数字をまとめた資料のページ' },
      { src: './assets/works/analysis-4.jpg', alt: 'プレゼン用の資料5枚を並べたもの' },
      { src: './assets/works/analysis-5.jpg', alt: 'レポート用の資料5枚を並べたもの。グラフで数字の変化をまとめている' }
    ],
    start: 0 // 最初に大きく出す画像（カードと同じもの）
  },
  guitar: {
    category: 'WEB DESIGN / WORDPRESS',
    title: 'ギター教室のHP制作',
    description: 'クライアント：益田ギターアカデミー\n制作物：ホームページ、ロゴ\n使用ソフト：Figma、Illustrator、WordPress、Visual Studio Code\n\n使えなくなったホームページの作り直しのご依頼。WordPressのオリジナルテーマを一から作りました。\n生成AIが普及する前の制作で、コードはすべて自分で書いています。記事の種類を増やすしくみ（カスタム投稿タイプ）や、スマホとPCで地図を出し分ける処理なども実装しました。',
    image: './assets/works/guitar-hp.jpg', alt: '益田ギターアカデミーのホームページ。トップ・今日の一曲・受講生募集・講師紹介・お問い合わせの5ページを並べたデザイン'
  },
  guitarlogo: {
    category: 'GRAPHIC / LOGO',
    title: 'ギター教室のロゴ制作',
    description: '業種「ギター教室」\nターゲット「全年代男女」\nご希望の内容\n「猫を入れたい」\n\nギターのシルエットとかけ合わせた猫をメインビジュアルにし親しみやすさを表現しました。 フォントはギターの弦をイメージした書体を使用しています。 SNSで使用できるアイコンも制作いたしました。',
    images: [
      { src: './assets/works/guitarlogo-1.jpg', alt: 'ギターのシルエットと猫を組み合わせたギター教室のロゴ' },
      { src: './assets/works/guitarlogo-2.jpg', alt: 'ギターの弦をイメージした書体のロゴ' },
      { src: './assets/works/guitarlogo-3.jpg', alt: 'SNS用の丸いアイコン' }
    ],
    start: 0 // 最初に大きく出す画像（カードと同じもの）
  },
  english: {
    category: 'GRAPHIC / LOGO',
    title: 'オンライン英会話スクールのロゴ制作',
    description: '業種「オンライン英会話スクール」　社員60名（割合：男40名・女性20名）海外に講師多数\nターゲット「20〜30代の社会人男女」\nご希望の内容\n「オンライン感を伝えたい」\n「英会話スクールの雰囲気を出してほしい」\n「外国感（グローバル）、カッコイイ印象」\n「”地球”と”吹き出しを”使ったシンプルなデザインが希望」\n「力強いイメージ」\n「カラーは青系が希望」\n\n地球儀とチャットマークをメインビジュアルにし、会話を楽しむ雰囲気を表現しました。 フォントで力強いかっこよいをイメージしサンセリフ体の太い書体を使用しています。 いろいろな人が利用すると考え落ち着いたイメージのカラーにて制作いたしました。kids向けのロゴも制作いたしました。',
    images: [
      { src: './assets/works/english-1.jpg', alt: '地球儀とチャットマークを組み合わせたオンライン英会話スクールのロゴ' },
      { src: './assets/works/english-2.jpg', alt: '文字だけで組んだロゴ' },
      { src: './assets/works/english-3.jpg', alt: '地球儀マークと文字を横に並べたロゴ' }
    ],
    start: 0 // 最初に大きく出す画像（カードと同じもの）
  },
  mirror: {
    category: 'GRAPHIC / LOGO',
    title: 'ヘアサロンのロゴ制作',
    description: 'ショップコンセプト「Hair Salon Mirror - 鏡に映る、新しい私」\nターゲット「ヘアサロン、エステなどに興味のある20〜30代女性」\nご希望の内容\n「デザインはシンプルでスタイリッシュだが温かみを感じるデザイン」\n「インパクトのあるマーク、シンボルがあるロゴが良い」\n「MirrorのMをシンボルにしたロゴデザインを作って欲しい」\n「カラーはシックでスタイリッシュな感じ」\n\nMirrorのMを変形四角形で表現したものをメインビジュアルにし、全体的にカジュアルなイメージを表現しました。 フォントは親しみやすく高級感のあるもので制作しています。 新しい自分に変化していくイメージをくすんだ紫のカラーにて制作いたしました。',
    images: [
      { src: './assets/works/mirror-1.jpg', alt: 'ヘアサロン「Mirror」のロゴを店舗の看板に入れたイメージ' },
      { src: './assets/works/mirror-2.jpg', alt: 'Mの字を変形四角形で表したロゴを紙に印刷したイメージ' },
      { src: './assets/works/mirror-3.jpg', alt: 'ロゴを店舗のガラスに入れたイメージ' }
    ],
    start: 0 // 最初に大きく出す画像（カードと同じもの）
  },
  flyer: {
    category: 'GRAPHIC / FLYER',
    title: 'チラシ制作',
    description: 'ヘアサロン「Mirror」のオープン告知チラシ（両面）と、同じ内容を三つ折りにしたパンフレットをデザインしました。\n・表：「NEW OPEN」の大きな文字とモデル写真で目を引き、チラシを持ってきた方への特典価格を丸い囲みで目立たせました\n・裏：リラクゼーションの流れを写真つきで5つのステップに分け、サロンメニューと料金を一覧にまとめました',
    images: [
      { src: './assets/works/flyer-1.jpg', alt: 'ヘアサロン「Mirror」のオープン告知チラシの表と裏。表は「NEW OPEN」の文字とモデル写真、裏はリラクゼーションの流れとサロンメニュー' },
      { src: './assets/works/flyer-2.jpg', alt: '同じデザインを三つ折りパンフレットにしたもの。外側にオープン告知と特典価格、内側にリラクゼーションの流れとサロンメニュー' }
    ],
    start: 0 // 最初に大きく出す画像（カードと同じもの）
  },
  meishi: {
    category: 'GRAPHIC / BUSINESS CARD',
    title: '名刺制作',
    description: 'ロゴを制作したヘアサロン「Mirror」・オンライン英会話スクールと、自社（Growl LaLaLa Design）の名刺をデザインしました。\n・Mirror：銀色の面にロゴマークだけを置き、もう一方の面に地図と店舗情報をまとめたデザイン\n・自社：パイナップル柄と犬のシルエットで、レトロ・南国・優しいイメージに\n・英会話スクール：縦型と横型の2種類',
    images: [
      { src: './assets/works/meishi-1.jpg', alt: 'ヘアサロン「Mirror」の名刺。銀色の面にMのロゴマーク、白い面に地図と店舗情報' },
      { src: './assets/works/meishi-2.jpg', alt: 'Growl LaLaLa Design の名刺。パイナップル柄の面と、ロゴと犬のシルエットが入った面' },
      { src: './assets/works/meishi-3.jpg', alt: 'オンライン英会話スクール「ABC online school」の縦型と横型の名刺' }
    ],
    start: 0 // 最初に大きく出す画像（カードと同じもの）
  },
  seminarbanner: {
    category: 'WEB DESIGN / BANNER',
    title: 'セミナー募集バナー制作',
    description: '競売不動産の入門セミナーの集客バナーです。\n同じ内容で、雰囲気の違う2パターンを制作しました。\n・講師の写真を大きく使い、実績と信頼感を前に出したデザイン\n・イラストとやわらかい色で、「初心者でもできる」親しみやすさを前に出したデザイン',
    images: [
      { src: './assets/works/seminar-banner-1.jpg', alt: '競売不動産入門セミナーの募集バナー。青い背景に「競売不動産入門セミナー」の文字と講師の写真' },
      { src: './assets/works/seminar-banner-2.jpg', alt: '競売不動産入門セミナーの募集バナー。黄緑とクリーム色の背景に、本を持つ人と貯金箱のイラスト' }
    ],
    start: 0 // 最初に大きく出す画像（カードと同じもの）
  },
  webseminarbanner: {
    category: 'WEB DESIGN / BANNER',
    title: 'Webデザイン講座の集客バナー制作',
    description: '副業Webデザインの「5日間チャレンジプログラム」の集客バナーを、用途ごとに3種類制作しました。\nターゲット「20〜60代前後の男女」\n\n1. サイズ違い3パターン（960×1200／300×600／160×600）\n必要な情報のみでシンプルに構成。講師の言葉が受け取り手によって印象がかなり異なってくる強めの内容と思ったため、ユーザーイメージは表情が読み取りにくいイラストを用いて制作。\n\n2. Facebook・Instagram広告用（1080×1080）\n最初に提示したラフ3種の中より、漫画バージョンを気に入っていただき、さらに3パターン作成して提案し、最終的に一番左のバナーが採用。\n\n3. YouTube・Google広告用（1200×628／728×90）\nデザイナーと聞くとイメージするような感じを意識して制作。',
    images: [
      { src: './assets/works/webseminar-banner-1.jpg', alt: 'イラストを使ったサイズ違い3パターンのバナー。「副業Webデザイン 5日間チャレンジプログラム」の文字' },
      { src: './assets/works/webseminar-banner-2.jpg', alt: '漫画のイラストを使ったSNS広告用バナー3パターン。「福岡県在住の方へ朗報 新しい働き方を手に入れる」の文字' },
      { src: './assets/works/webseminar-banner-3.jpg', alt: '人物写真を並べた広告用バナー2サイズ。「副業Webデザイン 5日間チャレンジプログラム」の文字' }
    ],
    start: 0 // 最初に大きく出す画像（カードと同じもの）
  },
  icebanner: {
    category: 'WEB DESIGN / BANNER',
    title: '物販バナー制作',
    description: '期間限定アイスの物販バナーです。\n「贅沢ごほうび」のイメージに合わせて、ダマスク柄（クラシックな植物模様）の暗い背景と金色の文字で高級感を出し、金粉がとろりとかかるアイスの写真を主役にしました。',
    images: [
      { src: './assets/works/ice-banner.jpg?v=2', alt: 'アイスの物販バナー。金粉がかかったチョコレートアイスの写真に「贅沢ごほうびアイス」「期間限定」の文字' }
    ],
    start: 0 // 最初に大きく出す画像（カードと同じもの）
  },
  recruitbanner: {
    category: 'WEB DESIGN / BANNER',
    title: '求人バナー制作',
    description: '求人用のバナーを2種類制作しました。\n・介護職：「週1日1h〜OK」「子育てとの両立も可能」など、自分のペースで働けることを前に出したデザイン\n・事務・販売・コールセンター：「年間休日120日以上」「職場見学可能」など、未経験の20〜30代が安心して応募できることを前に出したデザイン',
    images: [
      { src: './assets/works/recruit-banner-1.jpg', alt: '介護職の求人バナー。車いすの女性に寄り添うスタッフの写真に「週1日1h〜OK」「最大時給1,750円」などの文字' },
      { src: './assets/works/recruit-banner-2.jpg', alt: '事務・販売・コールセンターの求人バナー。笑顔の女性の写真に「年間休日120日以上」「職場見学可能」「未経験大歓迎！20〜30代活躍中」の文字' }
    ],
    start: 0 // 最初に大きく出す画像（カードと同じもの）
  },
  vip: {
    category: 'GRAPHIC / PRINT',
    title: 'ヘアサロンのVIPカード制作',
    description: 'コンペ形式で提案していたデザインを気に入っていただき、会員様向けのショップカードをご依頼いただきました。\n印刷会社とのやりとりなど、勉強になる点の多いお仕事をさせていただき大変感謝しています。\nご希望の内容\n「VIP向けの会員証カード」\n「ブラックカードのような高級感のあるイメージ」',
    images: [
      { src: './assets/works/vip-1.jpg', alt: '手に持ったヘアサロンの黒いVIPカード' },
      { src: './assets/works/vip-2.png', alt: 'ヘアサロン「HAIR SALON SUN」のロゴ' },
      { src: './assets/works/vip-3.jpg', alt: 'VIPカードの表面と裏面' }
    ],
    start: 0, // 最初に大きく出す画像（カードと同じもの）
    link: { label: 'HAIR SALON SUN', url: 'https://sites.google.com/view/cutsun/' }
  },
  wireframe: {
    category: 'UI DESIGN / WIREFRAME',
    title: '家事代行アプリのワイヤーフレーム作成',
    description: '家事代行アプリの、管理者・業務担当者側の一部機能のワイヤーフレーム作成をご依頼いただきました。Figma納品\n\n制作のポイント\nいただいた資料より情報を抽出し、画面遷移図を作成しつつ、各画面表示内容についてデザインをしました。\nご依頼内容にはありませんでしたが、画面遷移図を作成したことで流れが明確になり、クライアント様にもご満足いただけるものとなりました。\nプログラミングについて勉強した際に、データベースとの連携やアプリがどのように動くのかについて勉強していたことが活かせたお仕事でした。',
    images: [
      { src: './assets/works/wireframe-1.png', alt: 'アプリ画面のワイヤーフレーム' },
      { src: './assets/works/wireframe-2.png', alt: '管理画面の項目を並べたワイヤーフレーム' },
      { src: './assets/works/wireframe-3.png', alt: '画面遷移をまとめたFigmaのワイヤーフレーム' },
      { src: './assets/works/wireframe-4.jpg', alt: '入力内容によって赤・黄・青の3つに振り分けられる流れを示した画面遷移図' },
      { src: './assets/works/wireframe-5.jpg', alt: '管理者ページAとBのワイヤーフレームを並べた全体像' }
    ],
    start: 2 // 最初に大きく出す画像（カードと同じもの）
  },
  illust: {
    category: 'ILLUSTRATION / PERSONAL',
    title: 'イラスト（お仕事以外）',
    description: '使用ツール：CLIP STUDIO PAINT\n\n高校時代は同人誌を友人と作って、美術室でペン入れしたりトーンを貼ったりしていました。懐かしいです。今はデジタルの時代だからデジ絵も描けるようになれたらいいなと思って、数年前から始め、たまに描いています。\n書きかけのラフみたいなものが好きで、完成させないまま途中までで終わることが多いです。\nラフでいつも思い出すのは、学生時代に観た「マルメロの陽光」という映画で、その画家さんはキャンバスに時間を塗り込めようとしてたのか、未完成でまた上塗りして1から描く、未完成でまた上塗りして1から描くということを繰り返していたのが衝撃でした。',
    images: [
      { src: './assets/works/illust-1.jpg', alt: '女性のイラスト' },
      { src: './assets/works/illust-2.jpg', alt: '男性の似顔絵イラスト' },
      { src: './assets/works/illust-3.jpg', alt: 'キャラクターのイラスト' }
    ],
    start: 2 // 最初に大きく出す画像（カードと同じもの）
  },
  character: {
    category: 'ILLUSTRATION / CHARACTER',
    title: 'キャラクター作成（お仕事以外）',
    description: '使用ツール：CLIP STUDIO PAINT\n\nオリジナルキャラクターのデザイン\n漫画を描くために考えたものです。',
    images: [
      { src: './assets/works/character-1.jpg', alt: 'オリジナルキャラクターの全身イラスト。青い髪ととがった耳、紺色のマントに白いブラウスとグレーのロングスカート' }
    ],
    start: 0 // 最初に大きく出す画像（カードと同じもの）
  },
  golfmap: {
    category: 'GRAPHIC / FLOOR MAP',
    title: '室内ゴルフ場フロアマップ',
    description: '室内ゴルフ練習場のフロアマップのデザインをしました。\nオープンに向けてお急ぎとのことでしたが、ご担当者様のご指示が明快でスムーズに 納品ができました。\nご提供いただいた図面から要素を起こし、わかりやすくデザインしました。',
    images: [
      { src: './assets/works/golfmap-1.jpg', alt: '室内ゴルフ練習場1階のフロアマップ' },
      { src: './assets/works/golfmap-2.jpg', alt: '室内ゴルフ練習場2階のフロアマップ' },
      { src: './assets/works/golfmap-3.jpg', alt: '1階と2階をカラーで塗り分けたフロアマップ' }
    ],
    start: 2, // 最初に大きく出す画像（カードと同じもの）
    link: { label: 'GOLF CITY', url: 'https://www.instagram.com/golfcity_/' }
  },
  camp: {
    category: 'GRAPHIC / MAP',
    title: 'キャンプ場のマップ制作',
    description: 'もともとご使用されていたマップにあわせたデザインで、RVParkと全体マップの制作をご依頼いただきました。\n元マップがとても味のある素敵なマップだったので、素材や色等を変更しないよう気をつけ、新たなマップを追加したものとなりました。',
    images: [
      { src: './assets/works/camp-1.png', alt: 'キャンプ場の全体マップ' },
      { src: './assets/works/camp-2.png', alt: 'RVパークの区画を、木や車のイラストとあわせて描いた案内マップ' },
      { src: './assets/works/camp-3.jpg', alt: 'キャンプ場周辺の道路と川を示した地図' }
    ],
    start: 1, // 最初に大きく出す画像（カードと同じもの）
    link: { label: 'キャンプすがり2', url: 'https://camp-sugari.com/キャンプすがり2/' }
  },
  mirrormap: {
    category: 'GRAPHIC / MAP',
    title: 'マップ制作',
    description: 'ヘアサロン「Mirror」の名刺とチラシに載せる、店舗までの案内マップを制作しました。\n駅と目印になる建物だけを残して情報をしぼり、お店のイメージカラーの紫でまとめています。',
    images: [
      { src: './assets/works/mirror-map.jpg', alt: 'ヘアサロン「Mirror」の案内マップ。新宿駅から店舗までの道と、目印になる建物を紫の濃淡で描いた地図' }
    ],
    start: 0 // 最初に大きく出す画像（カードと同じもの）
  },
  ownsite: {
    category: 'GRAPHIC / BRANDING',
    title: '自社のサイト・ロゴ制作',
    description: '自サイトとロゴの制作をいたしました。\nWordPressでも作成してみましたが、Studioも試してみようと今回はStudioで制作しています。\n\n目的「自分のポートフォリオを見てもらい、仕事の依頼につなげたい」\n表現したい内容\n・イメージ：レトロ、南国、美味しそうな、優しい\n・顧客目線でサービス内容を紹介したい\n\n制作のポイント\nTOPページから画面遷移せずに大体の情報をとることができ、問い合わせフォームまで設置\n料金表やサービス内容を別ページで詳しく記載し、一見さんでも仕事を依頼する際のハードルを下げるよう工夫',
    images: [
      { src: './assets/works/ownsite-1.png', alt: 'Growl LaLaLa Design のロゴ' },
      { src: './assets/works/ownsite-2.png', alt: '4枚の葉を組み合わせたロゴマーク' },
      { src: './assets/works/ownsite-3.jpg', alt: 'ロゴを入れた名刺' },
      { src: './assets/works/ownsite-4.jpg', alt: '自社サイトのスマートフォン版とPC版を、上から順に並べた全体像' }
    ],
    start: 0, // 最初に大きく出す画像（カードと同じもの）
    link: { label: 'Growl LaLaLa Design', url: 'https://growl-lalala-design.com/' }
  }
};

const filters = document.querySelectorAll('[data-filter]');
const cards = document.querySelectorAll('.work-card[data-category]');
const counter = document.getElementById('works-count');
const emptyNote = document.getElementById('works-empty');
const filterNotes = document.querySelectorAll('[data-note-for]');

// 「もっと見る」：最初は数枚だけ出し、押すと残りを全部出す。
// 出す枚数は、最後の段がきっちり埋まる数（PCとタブレットは3列なので9枚、スマホは2列なので8枚）
const moreWrap = document.querySelector('.works-more');
const moreButton = document.querySelector('#works-more-button');
const isPhone = window.matchMedia('(max-width:650px)');
let currentFilter = 'all';
let expanded = false;

const applyFilter = () => {
  const limit = isPhone.matches ? 8 : 9;
  let visible = 0;
  cards.forEach(card => {
    const match = currentFilter === 'all' || card.dataset.category === currentFilter;
    if (match) visible++;
    const show = match && (expanded || visible <= limit);
    card.classList.toggle('is-hidden', !show);
    card.hidden = !show;
  });
  counter.textContent = `${String(visible).padStart(2, '0')} ${visible === 1 ? 'PROJECT' : 'PROJECTS'}`;
  // 作品が1つもない分類では、空っぽの一覧のかわりに案内文を出す
  if (emptyNote) emptyNote.hidden = visible > 0;
  // 分類ごとの案内（WEBのテンプレート案内など）は、その分類を選んだ時だけ出す
  filterNotes.forEach(note => { note.hidden = note.dataset.noteFor !== currentFilter; });
  // 隠れている作品がある時だけ「もっと見る」を出す
  if (moreWrap) {
    const rest = visible - limit;
    moreWrap.hidden = expanded || rest <= 0;
    moreButton.querySelector('.works-more__count').textContent = `残り${rest}件`;
  }
};

filters.forEach(button => {
  button.addEventListener('click', () => {
    currentFilter = button.dataset.filter;
    expanded = false; // 分類を変えたら、また少ない状態から
    filters.forEach(item => {
      const active = item === button;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    applyFilter();
  });
});
moreButton?.addEventListener('click', () => {
  // 開いた時、新しく出た最初の作品に読み上げ・キーボードの位置を移す
  const firstHidden = [...cards].find(card => card.hidden && (currentFilter === 'all' || card.dataset.category === currentFilter));
  expanded = true;
  applyFilter();
  firstHidden?.querySelector('.work-card__action')?.focus({ preventScroll: true });
});
isPhone.addEventListener('change', applyFilter);
applyFilter();

const menuButton = document.querySelector('.menu-button');
const mobileNav = document.querySelector('.mobile-nav');
let menuOpen = false;
const setMenuOpen = open => {
  menuOpen = open;
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'メニューを閉じる' : 'メニューを開く');
  mobileNav.classList.toggle('is-open', open);
  mobileNav.inert = !open;
  document.body.classList.toggle('menu-open', open);
};
menuButton.addEventListener('click', () => setMenuOpen(!menuOpen));
mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenuOpen(false)));
window.addEventListener('resize', () => {
  if (window.innerWidth > 900 && menuOpen) setMenuOpen(false);
});

const dialog = document.querySelector('#project-dialog');
const closeDialog = () => { if (dialog.open) dialog.close(); };
const dialogImage = document.querySelector('#dialog-image');
const dialogThumbs = document.querySelector('#dialog-thumbs');
document.querySelectorAll('[data-project]').forEach(button => {
  button.addEventListener('click', () => {
    const data = projects[button.dataset.project];
    if (!data) return;
    document.querySelector('#dialog-category').textContent = data.category;
    document.querySelector('#dialog-title').textContent = data.title;
    if (data.subtitle) {
      const sub = document.createElement('span');
      sub.className = 'dialog-title__sub';
      sub.textContent = data.subtitle;
      document.querySelector('#dialog-title').append(sub);
    }
    const description = document.querySelector('#dialog-description');
    description.textContent = data.description;
    description.hidden = !data.description; // 本文がない作品（ゴルフスクールLP）は空の段落を出さない
    // 画像：images があればそれを、なければ1枚だけの image を使う
    const images = data.images || [{ src: data.image, alt: data.alt }];
    const showImage = index => {
      dialogImage.src = images[index].src;
      dialogImage.alt = images[index].alt;
      dialogThumbs.querySelectorAll('button').forEach((thumb, i) => thumb.setAttribute('aria-pressed', String(i === index)));
    };
    dialogThumbs.innerHTML = '';
    dialogThumbs.hidden = images.length < 2;
    if (images.length > 1) {
      images.forEach((image, i) => {
        const thumb = document.createElement('button');
        thumb.type = 'button';
        thumb.setAttribute('aria-label', `${i + 1}枚目の画像を見る`);
        thumb.innerHTML = `<img src="${image.src}" alt="" />`;
        thumb.addEventListener('click', () => showImage(i));
        dialogThumbs.append(thumb);
      });
    }
    showImage(data.start || 0);
    dialogImage.style.objectPosition = data.position || ''; // 指定がなければCSSの中央
    // fit:'contain' の作品は切らずに全体を見せ、余白を白にする（地が白い画像向け）
    dialogImage.style.objectFit = data.fit || '';
    dialogImage.parentElement.style.background = data.fit === 'contain' ? '#fff' : '';
    // お客様のサイトなどへのリンク（ある作品だけ）
    const dialogLink = document.querySelector('#dialog-link');
    dialogLink.hidden = !data.link;
    if (data.link) {
      dialogLink.href = data.link.url;
      dialogLink.querySelector('span').textContent = data.link.label;
    }
    // 詳細ページがある作品だけ「詳細を見る」を出す
    const detailLink = document.querySelector('#dialog-detail');
    detailLink.hidden = !data.detail;
    if (data.detail) detailLink.href = data.detail;
    dialog.showModal();
  });
});
dialog.querySelector('.dialog-close').addEventListener('click', closeDialog);
dialog.querySelector('.dialog-back').addEventListener('click', closeDialog);
dialog.addEventListener('click', event => {
  if (event.target === dialog) closeDialog();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuOpen) setMenuOpen(false);
});

// ===== 追従ヘッダー =====
// 最初はヘッダーを隠しておき、HERO が画面から完全に出たら上からスライドで出す。HERO に戻ったら隠す。
const siteHeader = document.querySelector('.site-header');
const hero = document.querySelector('.hero');
if (siteHeader && hero) {
  new IntersectionObserver(([entry]) => {
    const passedHero = !entry.isIntersecting && entry.boundingClientRect.top < 0;
    siteHeader.classList.toggle('is-shown', passedHero);
    // TOPに戻るボタンも同じタイミングで出し入れする
    document.querySelector('.to-top')?.classList.toggle('is-shown', passedHero);
  }).observe(hero);
}

// ===== オープニング =====
// コピーを1文字ずつ <span> に分けて順番に上げ、終わったらカバーを消す。クリック・キー操作で飛ばせる。
const opening = document.querySelector('.opening');
if (opening && document.documentElement.classList.contains('is-opening')) {
  let i = 0;
  opening.querySelectorAll('.opening__phrase').forEach(phrase => {
    phrase.innerHTML = [...phrase.dataset.text]
      .map(char => `<span class="opening__char"><span style="--i:${i++}">${char}</span></span>`)
      .join('');
  });

  let finished = false;
  const finishOpening = () => {
    if (finished) return;
    finished = true;
    opening.classList.add('is-done');
    // カバーが消え始めたら、スクロールのロックを外して HERO の登場アニメを再生
    document.documentElement.classList.remove('is-opening');
    document.dispatchEvent(new Event('opening:done')); // 背景スライダーなどに「終わった」と知らせる
    try { localStorage.setItem('glOpeningSeen', '1'); } catch (e) {} // 見たことを記録（次からは出さない）
    setTimeout(() => opening.remove(), 900);
  };
  const timer = setTimeout(finishOpening, 3200); // 文字が出そろって少し見せてから消す
  ['click', 'keydown', 'wheel', 'touchstart'].forEach(type =>
    window.addEventListener(type, () => { clearTimeout(timer); finishOpening(); }, { once: true, passive: true })
  );
}

// ===== HEROの高さを読み込み時の大きさで固定 =====
// 高さ＝画面の高さ÷√2（白銀比）。読み込んだ時の値を上限にして、あとで最大化しても伸ばさない。
// ウィンドウを小さくした時だけは、はみ出さないように縮める。
const heroSection = document.querySelector('.hero');
if (heroSection) {
  // 背景の上下の段を真ん中の6割にしたので、3段が同じ高さだった時から
  // 縮んだ分（3段 → 0.6＋1＋0.6＝2.2段ぶん）だけHEROも低くする。32は上下の余白と段の間の合計
  const ROWS = 2.2 / 3;
  const silver = h => Math.round((h / Math.SQRT2 - 32) * ROWS + 32);
  const lockedHeight = silver(window.innerHeight);
  const applyHeroHeight = () => {
    const height = Math.min(lockedHeight, silver(window.innerHeight));
    document.documentElement.style.setProperty('--hero-h', `${height}px`);
  };
  applyHeroHeight();
  window.addEventListener('resize', applyHeroHeight);
}

// ===== お問い合わせ：メールアドレスをコピー =====
// Gmailなどブラウザでメールを使う人向け。押したらクリップボードに入れて「コピーしました」と出す。
const copyButton = document.querySelector('[data-copy]');
const copyStatus = document.querySelector('.contact-mail__status');
if (copyButton && copyStatus) {
  copyButton.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(copyButton.dataset.copy);
      copyStatus.textContent = 'コピーしました。お使いのメールに貼り付けてください。';
      copyButton.classList.add('is-copied'); // アイコンをチェックに
    } catch (e) {
      copyStatus.textContent = 'コピーできませんでした。アドレスを選択してコピーしてください。';
    }
    clearTimeout(copyButton.statusTimer);
    copyButton.statusTimer = setTimeout(() => { copyStatus.textContent = ''; copyButton.classList.remove('is-copied'); }, 4000);
  });
}

// ===== できること：4枚のカードの幅をそろえ、中身を左右中央に置く =====
// CSSだけだと、カードの幅が「その列の中身の長さ」で決まり、左右で幅がちがってしまう。
// 列ごと（上下2枚）の中身の幅を測って CSS に渡し、カードは左右半分ずつの同じ幅にする。
// 中身は左揃えのまま、その列の中身の幅の箱をカードの左右中央に置く（上下のカードで左端がそろう）。
// （高さは CSS の grid-auto-rows:1fr で4枚そろっている）
const abilityGrid = document.querySelector('.ability-grid');
if (abilityGrid) {
  const wide = window.matchMedia('(min-width: 651px)');
  let lastWidth = 0;
  const fitAbility = (force) => {
    const width = abilityGrid.clientWidth;
    if (!force && width === lastWidth) return; // 高さだけ変わった時は測り直さない（測り直しのくり返しを防ぐ）
    lastWidth = width;
    abilityGrid.classList.remove('is-fitted');
    if (!wide.matches) return; // スマホは1列なので不要
    // 一瞬だけ「中身ぴったりの幅」にして、6本の列の幅を読む。2本目＝左の列の中身、5本目＝右の列の中身
    abilityGrid.classList.add('is-measuring');
    const tracks = getComputedStyle(abilityGrid).gridTemplateColumns.split(' ').map(parseFloat);
    abilityGrid.classList.remove('is-measuring');
    abilityGrid.style.setProperty('--ability-c1', `${Math.ceil(tracks[1])}px`);
    abilityGrid.style.setProperty('--ability-c2', `${Math.ceil(tracks[4])}px`);
    abilityGrid.classList.add('is-fitted');
  };
  new ResizeObserver(() => fitAbility(false)).observe(abilityGrid);
  // 文字の書体が読み込まれると文字の幅が変わるので、その時にも測り直す
  if (document.fonts) document.fonts.ready.then(() => fitAbility(true));
}

// ===== HEROの白い円：大きく波打つたびに、形が 丸 → 四角 → 五角形 → 丸… と変わる =====
// CSS（hero-boil-wave・15.6秒で2回分）が、次の順にフィルターを切り替えている：
//   前半：形a ＋ ふよふよ → 波a1〜a9（a の形から b の形へ）→ 形b
//   後半：形b ＋ ふよふよ → 波b1〜b9（b の形から a の形へ）→ 形a
// ここでは、そのフィルターの中身を作る。見えていない方の形（a か b）を、次の形へ入れかえながら進む。
// しくみ：円の真ん中から見た角度ごとに「ふちをどこまで外へ／内へずらすか」を決め、
//         その量を画像（変位マップ：赤＝横、緑＝縦のずらし量）にして feDisplacementMap でふちを動かす。
//         四角や五角形は「その角度で、丸のふちを多角形のふちまでずらす量」で作る。
// タブレットの横長の楕円では形は変えず、丸のまま波打つだけにする。
(function () {
  const shapeFilters = { a: document.getElementById('hero-shape-a'), b: document.getElementById('hero-shape-b') };
  const waveFilters = {
    a: [...Array(9)].map((_, k) => document.getElementById(`hero-wave-a${k + 1}`)),
    b: [...Array(9)].map((_, k) => document.getElementById(`hero-wave-b${k + 1}`))
  };
  const wrap = document.querySelector('.hero-wrap');
  if (!shapeFilters.a || !shapeFilters.b || !wrap) return;

  const SIZE = 256;      // 変位マップの大きさ（円の外枠に合わせて引きのばされる）
  const SPAN = 0.4;      // 変位マップで表せる、いちばん大きなずれ（円の外枠に対する割合）
  const WAVES = 9;       // 波打つ時、円周に並べる波の数
  const PEAKS = [10, 18, 26, 32, 34, 30, 24, 16, 10]; // 波の高さ（px）：弱 → 強 → 弱

  // 形：角度 t の向きに、丸の半径を1とした時、ふちがどこにあるか
  const polygon = (n, apothem, t) => {
    const sector = (Math.PI * 2) / n;
    const from = (((t + Math.PI / 2) % sector) + sector) % sector; // 上に角が来るように
    return apothem / Math.cos(from - sector / 2);
  };
  const SHAPES = [
    () => 1,                                                            // 丸
    t => 0.9 / Math.max(Math.abs(Math.cos(t)), Math.abs(Math.sin(t))), // 四角
    t => polygon(5, 0.92, t)                                            // 五角形
  ];
  const shapeAt = i => SHAPES[((i % SHAPES.length) + SHAPES.length) % SHAPES.length];

  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = SIZE;
  const ctx = canvas.getContext('2d');

  // radius(t)：角度 t でのふちの位置（丸＝1）。kx・ky：横・縦のずらし量の倍率（横長の楕円で横にのびすぎないように）
  function makeMap(radius, kx, ky) {
    const img = ctx.createImageData(SIZE, SIZE);
    const c = SIZE / 2;
    for (let y = 0; y < SIZE; y++) {
      for (let x = 0; x < SIZE; x++) {
        const dx = x + 0.5 - c, dy = y + 0.5 - c;
        const len = Math.hypot(dx, dy) || 1;
        // ふちを外へ押し出す所は、内側の白を取りにいく（向きはマイナス）。0.5 は円の外枠の半分＝丸の半径
        const push = (radius(Math.atan2(dy, dx)) - 1) * 0.5 / SPAN;
        const i = (y * SIZE + x) * 4;
        img.data[i] = Math.round(255 * Math.min(1, Math.max(0, 0.5 - (dx / len) * push * 0.5 * kx)));
        img.data[i + 1] = Math.round(255 * Math.min(1, Math.max(0, 0.5 - (dy / len) * push * 0.5 * ky)));
        img.data[i + 2] = 128;
        img.data[i + 3] = 255;
      }
    }
    ctx.putImageData(img, 0, 0);
    return canvas.toDataURL('image/png');
  }

  // フィルターの中身を「変位マップ1枚 ＋ ずらす」に作りかえる
  const NS = 'http://www.w3.org/2000/svg';
  const build = filter => {
    filter.setAttribute('primitiveUnits', 'objectBoundingBox');
    // 変位マップの色の値を、そのまま「ずらす量」として使う（指定しないと色の変換がかかり、ずれ方がゆがむ）
    filter.setAttribute('color-interpolation-filters', 'sRGB');
    filter.replaceChildren();
    const image = document.createElementNS(NS, 'feImage');
    // 変位マップは、フィルターの描く範囲（円の外枠＋上下左右15%）全体に敷く。
    // 円の外枠ぴったりにすると、その外側は「マップなし＝左上へずらす」扱いになり、円の一部が右下にずれて写り込んでしまう
    image.setAttribute('x', '-0.15'); image.setAttribute('y', '-0.15');
    image.setAttribute('width', '1.3'); image.setAttribute('height', '1.3');
    image.setAttribute('preserveAspectRatio', 'none');
    image.setAttribute('result', 'map');
    const disp = document.createElementNS(NS, 'feDisplacementMap');
    disp.setAttribute('in', 'SourceGraphic');
    disp.setAttribute('in2', 'map');
    disp.setAttribute('xChannelSelector', 'R');
    disp.setAttribute('yChannelSelector', 'G');
    disp.setAttribute('scale', String(SPAN));
    filter.append(image, disp);
    return image;
  };
  const shapeImages = { a: build(shapeFilters.a), b: build(shapeFilters.b) };
  const waveImages = { a: waveFilters.a.map(build), b: waveFilters.b.map(build) };

  const ease = p => p * p * (3 - 2 * p); // 形の変わり方：はじめと終わりをゆっくり
  const wave = t => Math.sin(t * WAVES) * 0.85 + Math.sin(t * WAVES * 2 + 1) * 0.15;

  let morph = true, amp = 1, kx = 1, ky = 1;
  const filled = { a: null, b: null }; // a・b に今入っている形の番号

  // slot（a か b）に「形 i」と「形 i から 形 i+1 へ波打ちながら変わる9コマ」を入れる
  function fill(slot, i) {
    if (filled[slot] === i) return;
    filled[slot] = i;
    const from = morph ? shapeAt(i) : SHAPES[0];
    const to = morph ? shapeAt(i + 1) : SHAPES[0];
    shapeImages[slot].setAttribute('href', makeMap(from, kx, ky));
    waveImages[slot].forEach((image, k) => {
      const p = ease(k / 8);
      const height = (PEAKS[k] / 450) * amp; // 丸の半径（約450px）に対する波の高さ
      image.setAttribute('href', makeMap(t => from(t) + (to(t) - from(t)) * p + height * wave(t + k * 0.04), kx, ky));
    });
  }

  // 今どちらの形が見えているかを見て、見えていない方を次の形に入れかえる
  const CYCLE = 7800; // 半分（形1つ分）の長さ（ms）
  let anim = null;
  const tick = () => {
    if (!anim || anim.playState === 'idle') {
      anim = wrap.getAnimations({ subtree: true }).find(a => a.animationName === 'hero-boil-wave') || null;
    }
    const half = anim ? Math.floor((anim.currentTime || 0) / CYCLE) : 0; // 何回目の形か
    if (half % 2 === 0) { fill('a', half); fill('b', half + 1); }
    else { fill('b', half); fill('a', half + 1); }
  };

  // 画面の大きさ：PC（ほぼまんまる）は形を変える。タブレット（横長の楕円）は丸のまま波打つだけ
  let timer = null;
  const fit = () => {
    const box = getComputedStyle(wrap, '::before');
    const w = parseFloat(box.width), h = parseFloat(box.height);
    if (!(w > 0 && h > 0)) return;
    const size = Math.min(w, h);
    const next = { morph: Math.abs(w / h - 1) < 0.05, amp: Math.min(1, size / 900) * (900 / size), kx: size / w, ky: size / h };
    next.amp = Math.round(next.amp * 20) / 20; next.kx = Math.round(next.kx * 20) / 20; next.ky = Math.round(next.ky * 20) / 20;
    if (next.morph === morph && next.amp === amp && next.kx === kx && next.ky === ky && filled.a !== null) return;
    ({ morph, amp, kx, ky } = next);
    filled.a = filled.b = null; // 作り直す
    tick();
  };
  fit();
  setInterval(tick, 400);
  new ResizeObserver(() => { clearTimeout(timer); timer = setTimeout(fit, 150); }).observe(wrap);
})();

// ===== お客様の声：1件ずつ見せるスライダー =====
// 横に並べた3枚を、まとめて「1枚分ずつ左へずらす」（transform）ことで切り替える。
// スクロールで動かす作りは、途中で止まって2枚の間に挟まることがあったので使わない
(() => {
  const track = document.querySelector('#voice-track');
  if (!track) return;
  const root = track.closest('.voice');
  const slides = [...track.querySelectorAll('.voice-slide')];
  const dotsBox = root.querySelector('.voice-dots');
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let current = 0;
  const dots = slides.map((_, i) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.className = 'voice-dots__dot';
    dot.setAttribute('aria-label', `${i + 1}件目`);
    dot.addEventListener('click', () => go(i));
    dotsBox.append(dot);
    return dot;
  });
  const go = i => {
    current = (i + slides.length) % slides.length;
    slides.forEach((slide, n) => {
      slide.style.transform = `translateX(${-current * 100}%)`;
      // 見えていない2枚は、読み上げ・Tabキーの対象から外す
      slide.inert = n !== current;
      slide.setAttribute('aria-hidden', n === current ? 'false' : 'true');
    });
    dots.forEach((dot, n) => dot.setAttribute('aria-current', n === current ? 'true' : 'false'));
  };
  root.querySelector('.voice-nav__arrow--prev').addEventListener('click', () => go(current - 1));
  root.querySelector('.voice-nav__arrow--next').addEventListener('click', () => go(current + 1));
  // スマホ：横に40px以上スワイプしたら前後へ（縦のスクロールはそのまま）
  let startX = null, startY = 0;
  track.addEventListener('touchstart', e => { startX = e.touches[0].clientX; startY = e.touches[0].clientY; }, { passive: true });
  track.addEventListener('touchend', e => {
    if (startX === null) return;
    const dx = e.changedTouches[0].clientX - startX, dy = e.changedTouches[0].clientY - startY;
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) go(current + (dx < 0 ? 1 : -1));
    startX = null;
  }, { passive: true });
  go(0);
  // 自動送り：マウスが乗っている間・指で触れた後・中にフォーカスがある間・画面外では止める
  if (reduce) return;
  let paused = false, visible = false;
  root.addEventListener('pointerenter', () => { paused = true; });
  root.addEventListener('pointerleave', () => { paused = false; });
  root.addEventListener('focusin', () => { paused = true; });
  root.addEventListener('focusout', () => { paused = false; });
  track.addEventListener('touchstart', () => { paused = true; }, { passive: true });
  new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; }).observe(root);
  setInterval(() => { if (!paused && visible && !document.hidden) go(current + 1); }, 7000);
})();
