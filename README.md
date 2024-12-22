# tabiran
![logo](https://github.com/user-attachments/assets/5c5500d6-7989-407e-9b90-dd5c2a37d55b)

## 概要
ランニングを習慣とするランナーが、出張先や旅先で、その土地ならではのコースを走り、「新たな体験」や「非日常を楽しむ」ための、おススメコース情報共有アプリです。

### サイトテーマ
「ランニングで新たな体験を」

### テーマを選んだ理由
走りながらその土地の景色や街並みを見たり、街の雰囲気を感じる「出張先や旅先でのランニング」の魅力や実際の体験談について、ランナー同士が共有する場所をつくりたかったため。

#### 【きっかけ】
「出張先や旅先でもランニングをしたいけど、土地感がなくコースがわからない」、「その地域のおススメコースを知りたい」と思ったことがきっかけです。走ったコースや感想を記録に残して、他のランナーに共有できれば、その土地にはじめて訪れた人でも、その土地ならではのコースを体験できると思いました。

実際、「出張、旅先、ラン」で検索すると、「出張ラン」や「旅ラン」といった言葉で、出張・旅先でのランニングを楽しむ人の個人ブログなどがでてきます。こうした情報を共有し、ユーザ同士がつながるアプリがあれば、より広く情報共有ができるのではないかと考えました。

#### 【問題点】
地域ごとのおススメコース、その地域ならではのニッチなコース、きれいな景色が見れるコースなどの情報は、個人ブログに掲載されており、情報をまとめたツールは見当たりません。また、SNSのような双方向のコミュニケーションが取れないため、投稿情報を「さらに詳しく知りたい」、「疑問を解消したい」などの要望があっても、気軽に情報交換ができません。

#### 【解決策】
・出張先、旅先で体験したコースについて、「場所・コース・感想」を投稿できます。  
・ユーザが投稿したおススメコースの一覧や検索機能から、自分が知りたい地域のコース情報を知ることができます。  
・投稿に対してコメントを送ることができます。投稿に対する感想や意見、補足情報などをコメントすることで、他のユーザはより詳細な情報を得られ、投稿ユーザも自身の投稿に対してフィードバックを受けることで新たな視点や情報を得ることができます。  
・お互いがフォローしあう場合は、チャット機能により、直接コミュニケーションを取ることができます。投稿内容について、「より詳細な情報を知りたい」、「疑問を解決したい」ユーザと、これまでの体験・知識・経験を持つユーザが、リアルタイムでやりとりすることができます。

## ターゲットユーザー
出張や旅先でも走りたい人

## 主な利用シーン
出張先や旅先でのランニング

## 利用方法
新規登録ボタンをクリックします。
![スクリーンショット 2024-12-22 084032](https://github.com/user-attachments/assets/c3241fbd-2383-4687-a9d9-e8f874c7fd2f)

名前、メールアドレス、パスワードを登録します。
![スクリーンショット 2024-12-22 084101](https://github.com/user-attachments/assets/876b957b-0ec1-48bd-ac5b-1b1346f04e9b)

投稿一覧画面に遷移します。ユーザーの投稿を閲覧できます。左側のプロフィールにある「投稿する」ボタン、またはバナーの「投稿する」から新規投稿ができます。
![スクリーンショット 2024-12-22 084204](https://github.com/user-attachments/assets/466e0f33-5429-4a50-857e-6a5cf57c8c4e)

新規投稿画面で場所、感想、画像などを入力すると新規投稿できます。
![スクリーンショット 2024-12-22 134238](https://github.com/user-attachments/assets/1890e993-5455-488b-8373-97ca08da33af)

ユーザーの投稿をクリックすると投稿詳細をみることができます。投稿したユーザーの感想を見たり投稿にコメントすることができます。また、投稿にいいねをしたり閲覧数の確認をすることもできます。
![スクリーンショット 2024-12-22 090325](https://github.com/user-attachments/assets/3af3037d-6b6a-4dc1-8e87-61687fabb8f0)

## 機能一覧
・基本的なCRUD機能  
・ユーザー認証(devise)  
・いいね機能  
・コメント機能  
・フォロー機能  
・画像アップロード機能(Refile)  
・チャット機能  
・下書き機能  
・検索機能  
・閲覧数表示機能  
・バリデーション機能  
・ページネーション  
・レスポンシブ対応  

## 開発環境
・OS：Windows11＋ Git Bash  
・言語：HTML、CSS、JavaScript、Ruby  
・フレームワーク：Ruby on Rails  
・JSライブラリ：jQuery  
・データベース：PostgreSQL
