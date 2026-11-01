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
    description: '業種「オンラインセミナー運営」\nターゲット「40代前後の男女（男性3：女性7）。Webデザインに興味がある人、在宅でできる仕事を探している人」\nご希望の内容\n・配色：指定なし\n・印象：明るく、信頼感があること\n・サイズ：スマホ\n\n制作のポイント\n・ファーストビューには、勉強している姿や数か月後の自分を思い描けるような写真を使いました。そのあと、ユーザーが抱きそうな疑問やメリットを、順番に答える流れで説明しています。\n・申し込みボタンには残り時間のカウントダウンを付けて、ファーストビューのすぐ下に置きました。',
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
    description: '業種「医療品販売」\nターゲット「O脚・X脚・猫背・外反母趾などで悩んでいる幅広い年代の男女」\nご希望の内容\n・職人が上質な本革で一つずつ手作りしている、高級インソールであることを伝えたい\n・医療機関での採用や特許取得の実績から、信頼感を出したい\n\n制作のポイント\n・ファーストビューで「医療機関で採用」「特許取得」の実績を見せて、最初に信頼してもらえるようにしました。そのあとは親しみやすいイラストを使い、悩んでいる人の目線に近いところから説明しています。\n・インソールとしては価格が高めなので、購入ボタンや全体の雰囲気に高級感を持たせました。',
    images: [
      { src: './assets/works/insole-1.jpg', alt: 'インソールのLPをノートパソコンとスマートフォンに表示したイメージ' },
      { src: './assets/works/insole-2.jpg', alt: 'LPのファーストビューをスマートフォンに表示したイメージ' },
      { src: './assets/works/insole-3.jpg', alt: 'LP全体をスマートフォン画面と並べたイメージ' },
      { src: './assets/works/insole-4.jpg', alt: 'LPのスマートフォン版とPC版を、上から順に並べた全体像' }
    ],
    start: 0 // 最初に大きく出す画像（カードと同じもの）
  },
  ramen: {
    category: 'WEB DESIGN / LP',
    title: '飲食店の求人LP制作',
    description: '業種「飲食店（ラーメン店）」\nターゲット「飲食店で働きたい人」\n\n制作のポイント\n・お客様へのヒアリングをもとに、キャッチコピーや本文も自分で考えて書きました。\n・ファーストビューは、ABテスト用に2パターン作りました。\n　A：「飲食経験ゼロから店長へ」。独立支援など、その先のキャリアを前に出したパターン\n　B：「まかないは食い放題だ！」「履歴書は不要」。すぐ働きたい人に向けて、気軽さを前に出したパターン\n・WordPressに実装して納品しました。',
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
    description: '制作物「Instagramの連載漫画（1話12枚）」\n\n制作のポイント\n・EC実務で出てくる「なんで？」という疑問を、1話ずつ漫画で解説しています。\n・AIと相談しながら、テーマ選び・構成・レイアウト・作画などを行い、細かな修正を人間がやる形で制作しています。',
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
    description: '業種「ホテルレストラン」\n制作物「ハロウィンイベントLPのマーケティング分析・改善提案・中間報告資料」\n\nご希望の内容\n・ハロウィンイベントの予約につなげたい\n\n制作のポイント\n・いただいたスプレッドシートのデータを分析し、現状の問題点を整理して、改善策を提案しました。\n・改善策を実施したあとのデータも分析し、さらに次の改善策を考えて提案しました。\n・9月度の中間報告として、ここまでの結果を資料にまとめました。',
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
    description: '業種「ギター教室（益田ギターアカデミー）」\n制作物「ホームページ、ロゴ」\n使用ツール「Figma、Illustrator、WordPress、Visual Studio Code」\n\nご希望の内容\n・使えなくなったホームページを作り直したい\n\n制作のポイント\n・WordPressのオリジナルテーマを一から作りました。\n・生成AIが普及する前の制作で、コードはすべて自分で書いています。\n・カスタム投稿タイプや、スマホとPCで地図を出し分ける処理も実装しました。',
    image: './assets/works/guitar-hp.jpg', alt: '益田ギターアカデミーのホームページ。トップ・今日の一曲・受講生募集・講師紹介・お問い合わせの5ページを並べたデザイン'
  },
  guitarlogo: {
    category: 'GRAPHIC / LOGO',
    title: 'ギター教室のロゴ制作',
    description: '業種「ギター教室」\nターゲット「幅広い年代の男女」\n\nご希望の内容\n・猫を入れたい\n\n制作のポイント\n・ギターのシルエットと猫を組み合わせたマークで、親しみやすさを表現しました。\n・文字は、ギターの弦をイメージした書体を選びました。\n・SNSで使えるアイコンも制作しました。',
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
    description: '業種「オンライン英会話スクール（社員60名・海外に講師多数）」\nターゲット「20〜30代の社会人の男女」\n\nご希望の内容\n・オンラインで学べることと、英会話スクールの雰囲気を伝えたい\n・グローバルで、かっこよく力強い印象にしたい\n・「地球」と「吹き出し」を使ったシンプルなデザインにしたい\n・色は青系にしたい\n\n制作のポイント\n・地球儀と吹き出しを組み合わせたマークで、会話を楽しむ雰囲気を表現しました。\n・力強さとかっこよさを出すため、太いサンセリフ体を使いました。\n・幅広い人が使うことを考えて、落ち着いた青でまとめました。\n・キッズ向けのロゴも制作しました。',
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
    description: '業種「ヘアサロン（Hair Salon Mirror）」\nコンセプト「鏡に映る、新しい私」\nターゲット「ヘアサロンやエステに興味のある20〜30代の女性」\n\nご希望の内容\n・シンプルでスタイリッシュだけど、温かみのあるデザインにしたい\n・インパクトのあるマーク（シンボル）がほしい\n・MirrorのMをシンボルにしたい\n・色はシックでスタイリッシュにしたい\n\n制作のポイント\n・MirrorのMを変形させた四角形で表現し、マークにしました。\n・文字は、親しみやすさと高級感をあわせ持つ書体を選びました。\n・新しい自分に変わっていくイメージを、くすんだ紫で表現しました。',
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
    description: '業種「ヘアサロン（Hair Salon Mirror）」\n制作物「オープン告知チラシ（両面）、三つ折りパンフレット」\n\n制作のポイント\n・表：「NEW OPEN」の大きな文字とモデル写真で目を引き、チラシを持ってきた方への特典価格を丸い囲みで目立たせました。\n・裏：リラクゼーションの流れを写真つきで5つのステップに分け、サロンメニューと料金を一覧にまとめました。\n・パンフレットは、同じ内容を三つ折りの形に組み直しました。',
    images: [
      { src: './assets/works/flyer-1.jpg', alt: 'ヘアサロン「Mirror」のオープン告知チラシの表と裏。表は「NEW OPEN」の文字とモデル写真、裏はリラクゼーションの流れとサロンメニュー' },
      { src: './assets/works/flyer-2.jpg', alt: '同じデザインを三つ折りパンフレットにしたもの。外側にオープン告知と特典価格、内側にリラクゼーションの流れとサロンメニュー' }
    ],
    start: 0 // 最初に大きく出す画像（カードと同じもの）
  },
  meishi: {
    category: 'GRAPHIC / BUSINESS CARD',
    title: '名刺制作',
    description: '制作物「名刺（ヘアサロン Mirror／オンライン英会話スクール／自社）」\n\n制作のポイント\n・Mirror：銀色の面にロゴマークだけを置き、もう一方の面に地図と店舗情報をまとめました。\n・英会話スクール：縦型と横型の2種類を作りました。\n・自社：パイナップル柄と犬のシルエットで、レトロ・南国・優しいイメージにしました。',
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
    description: '業種「不動産セミナー（競売不動産）」\n制作物「入門セミナーの集客バナー（2パターン）」\n\n制作のポイント\n・同じ内容で、雰囲気の違う2パターンを作りました。\n・1つめは講師の写真を大きく使い、実績と信頼感を前に出しました。\n・2つめはイラストとやわらかい色で、「初心者でもできる」親しみやすさを前に出しました。',
    images: [
      { src: './assets/works/seminar-banner-1.jpg', alt: '競売不動産入門セミナーの募集バナー。青い背景に「競売不動産入門セミナー」の文字と講師の写真' },
      { src: './assets/works/seminar-banner-2.jpg', alt: '競売不動産入門セミナーの募集バナー。黄緑とクリーム色の背景に、本を持つ人と貯金箱のイラスト' }
    ],
    start: 0 // 最初に大きく出す画像（カードと同じもの）
  },
  webseminarbanner: {
    category: 'WEB DESIGN / BANNER',
    title: 'Webデザイン講座の集客バナー制作',
    description: '業種「オンラインセミナー運営（副業Webデザイン講座）」\nターゲット「20〜60代前後の男女」\n制作物「『5日間チャレンジプログラム』の集客バナー（用途別に3種類）」\n\n制作のポイント\n・サイズ違い3パターン（960×1200／300×600／160×600）：必要な情報だけでシンプルに構成しました。講師の言葉が強めで、受け取る人によって印象が大きく変わりそうだったため、人物は表情が読み取りにくいイラストにしました。\n・Facebook・Instagram広告用（1080×1080）：最初に出したラフ3種のうち漫画風の案を気に入っていただき、さらに3パターンを提案しました。最終的に一番左のバナーが採用されました。\n・YouTube・Google広告用（1200×628／728×90）：「デザイナー」と聞いて多くの人が思い浮かべるイメージに近づけました。',
    images: [
      { src: './assets/works/webseminar-banner-1.jpg', alt: 'イラストを使ったサイズ違い3パターンのバナー。「副業Webデザイン 5日間チャレンジプログラム」の文字' },
      { src: './assets/works/webseminar-banner-2.jpg', alt: '漫画のイラストを使ったSNS広告用バナー3パターン。「福岡県在住の方へ朗報 新しい働き方を手に入れる」の文字' },
      { src: './assets/works/webseminar-banner-3.jpg', alt: '人物写真を並べた広告用バナー2サイズ。「副業Webデザイン 5日間チャレンジプログラム」の文字' }
    ],
    start: 0 // 最初に大きく出す画像（カードと同じもの）
  },
  instabanner: {
    category: 'WEB DESIGN / SNS BANNER',
    title: 'Instagram広告バナー制作',
    description: '業種「オンラインセミナー運営（副業Webデザイン講座）」\nターゲット「20〜60代前後の男女」\n制作物「Facebook・Instagram広告用のバナー（1080×1080）」\n\n制作のポイント\n・最初に雰囲気の違うラフを3種類お出しし、漫画風の案を気に入っていただきました。\n・漫画風で、さらに3パターンを作って提案しました。最終的に一番左のバナーが採用されました。',
    images: [
      { src: './assets/works/insta-banner-1.jpg', alt: '採用されたバナー。漫画の女性のイラストと「福岡県在住の方へ朗報 新しい働き方を手に入れる WEBデザイン5日間チャレンジの参加者を募集しています」の文字' },
      { src: './assets/works/webseminar-banner-2.jpg', alt: '提案した漫画風バナー3パターン。左が採用されたもの' }
    ],
    start: 0 // 最初に大きく出す画像（カードと同じ、採用された1枚）
  },
  icebanner: {
    category: 'WEB DESIGN / BANNER',
    title: '物販バナー制作',
    description: '制作物「期間限定アイスの物販バナー」\n\n制作のポイント\n・「贅沢ごほうび」のイメージに合わせて、ダマスク柄の暗い背景と金色の文字で高級感を出しました。\n・金粉がとろりとかかるアイスの写真を主役にしました。',
    images: [
      { src: './assets/works/ice-banner.jpg?v=2', alt: 'アイスの物販バナー。金粉がかかったチョコレートアイスの写真に「贅沢ごほうびアイス」「期間限定」の文字' }
    ],
    start: 0 // 最初に大きく出す画像（カードと同じもの）
  },
  recruitbanner: {
    category: 'WEB DESIGN / BANNER',
    title: '求人バナー制作',
    description: '制作物「求人バナー（2種類）」\n\n制作のポイント\n・介護職：「週1日1h〜OK」「子育てとの両立も可能」など、自分のペースで働けることを前に出しました。\n・事務・販売・コールセンター：「年間休日120日以上」「職場見学可能」など、未経験の20〜30代が安心して応募できることを前に出しました。',
    images: [
      { src: './assets/works/recruit-banner-1.jpg', alt: '介護職の求人バナー。車いすの女性に寄り添うスタッフの写真に「週1日1h〜OK」「最大時給1,750円」などの文字' },
      { src: './assets/works/recruit-banner-2.jpg', alt: '事務・販売・コールセンターの求人バナー。笑顔の女性の写真に「年間休日120日以上」「職場見学可能」「未経験大歓迎！20〜30代活躍中」の文字' }
    ],
    start: 0 // 最初に大きく出す画像（カードと同じもの）
  },
  vip: {
    category: 'GRAPHIC / PRINT',
    title: 'ヘアサロンのVIPカード制作',
    description: '業種「ヘアサロン」\n制作物「会員様向けのVIPカード（ショップカード）」\n\nご希望の内容\n・VIP向けの会員証カードにしたい\n・ブラックカードのような高級感を出したい\n\n制作のポイント\n・コンペで提案したデザインを気に入っていただき、ご依頼につながりました。\n・印刷会社とのやりとりも含めて対応し、学びの多いお仕事になりました。',
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
    description: '業種「家事代行サービス（アプリ）」\n制作物「管理者・業務担当者向け画面のワイヤーフレーム（一部機能）」\n使用ツール「Figma（Figmaデータで納品）」\n\n制作のポイント\n・いただいた資料から必要な情報を抜き出し、画面遷移図を作りながら、各画面に表示する内容を設計しました。\n・画面遷移図はご依頼にはありませんでしたが、作ったことで流れがはっきりし、満足していただけました。\n・プログラミングの勉強で、データベースとの連携やアプリが動くしくみを学んでいたことが活きました。',
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
    description: '使用ツール「CLIP STUDIO PAINT」\n\nひとこと\n・高校時代は友人と同人誌を作って、美術室でペン入れしたりトーンを貼ったりしていました。今はデジタルの時代なので、デジ絵も描けるようになりたいと思い、数年前から始めてたまに描いています。\n・描きかけのラフのようなものが好きで、完成させずに途中で終わることが多いです。\n・ラフでいつも思い出すのは、学生時代に観た映画「マルメロの陽光」です。画家が、未完成のまま上から塗り直して一から描く、ということを繰り返していて、キャンバスに時間を塗り込めようとしているようで衝撃でした。',
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
    description: '使用ツール「CLIP STUDIO PAINT」\n\nひとこと\n・漫画を描くために考えた、オリジナルキャラクターです。',
    images: [
      { src: './assets/works/character-1.jpg', alt: 'オリジナルキャラクターの全身イラスト。青い髪ととがった耳、紺色のマントに白いブラウスとグレーのロングスカート' }
    ],
    start: 0 // 最初に大きく出す画像（カードと同じもの）
  },
  golfmap: {
    category: 'GRAPHIC / FLOOR MAP',
    title: '室内ゴルフ場フロアマップ',
    description: '業種「室内ゴルフ練習場」\n制作物「フロアマップ」\n\nご希望の内容\n・オープンに間に合うよう、急ぎで仕上げたい\n\n制作のポイント\n・いただいた図面から要素を起こし、ひと目でわかるデザインにしました。\n・ご担当者様の指示が明快だったおかげで、急ぎの中でもスムーズに納品できました。',
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
    description: '業種「キャンプ場」\n制作物「RVParkのマップ、全体マップ」\n\nご希望の内容\n・もともと使っているマップに合わせたデザインにしたい\n\n制作のポイント\n・元のマップがとても味のある素敵なものだったので、素材や色を変えないよう気をつけて、新しいマップを描き足しました。',
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
    description: '業種「ヘアサロン（Hair Salon Mirror）」\n制作物「名刺・チラシに載せる店舗案内マップ」\n\n制作のポイント\n・駅と目印になる建物だけを残して、情報をしぼりました。\n・お店のイメージカラーの紫でまとめました。',
    images: [
      { src: './assets/works/mirror-map.jpg', alt: 'ヘアサロン「Mirror」の案内マップ。新宿駅から店舗までの道と、目印になる建物を紫の濃淡で描いた地図' }
    ],
    start: 0 // 最初に大きく出す画像（カードと同じもの）
  },
  ownsite: {
    category: 'GRAPHIC / BRANDING',
    title: '自社のサイト・ロゴ制作',
    description: '制作物「自社サイト、ロゴ」\n使用ツール「Studio」\n目的「自分のポートフォリオを見てもらい、仕事の依頼につなげたい」\n\n表現したい内容\n・イメージ：レトロ、南国、美味しそうな、優しい\n・お客様目線でサービス内容を紹介したい\n\n制作のポイント\n・WordPressでも作ってみましたが、Studioも試してみたくて、今回はStudioで制作しました。\n・トップページだけで大体の情報がわかるようにし、問い合わせフォームまで置きました。\n・料金表やサービス内容は別ページで詳しく書き、初めての方でも依頼しやすいようにしました。',
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
    const match = currentFilter === 'all' || card.dataset.category.split(' ').includes(currentFilter);
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
  const firstHidden = [...cards].find(card => card.hidden && (currentFilter === 'all' || card.dataset.category.split(' ').includes(currentFilter)));
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
    // 本文を1行ずつ見て、「業種」「ご希望の内容」などの項目名だけ目立つ部品にする（ほかはそのまま文字で入れる）
    description.textContent = '';
    // 小見出しの前の空行は消す（空行がある見出し・ない見出しで間隔がばらつくので、間隔はCSSの余白でそろえる）
    const heads = /^(ご希望の内容|制作のポイント|表現したい内容|ひとこと)$/;
    (data.description || '').split('\n').filter((line, i, lines) => !(line === '' && heads.test(lines[i + 1] || ''))).forEach((line, i) => {
      if (i > 0) description.append('\n');
      const label = (text, cls) => {
        const span = document.createElement('span');
        span.className = cls;
        span.textContent = text;
        description.append(span);
      };
      // 見出しだけの行：ご希望の内容／制作のポイント／表現したい内容
      if (heads.test(line)) return label(line, 'desc-head');
      // 「業種「〇〇」」の形：項目名をラベルにして、カギカッコは外す
      const m = line.match(/^(業種|コンセプト|ターゲット|制作物|使用ツール|目的)「(.*?)」(.*)$/);
      if (m) { label(m[1], 'desc-label'); description.append(m[2] + m[3]); return; }
      description.append(line);
    });
    description.hidden = !data.description; // 本文がない作品は空の段落を出さない
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
