|基本はastroファイルにHTML CSS、SCSS、Javascriptを書く|
|:----|
|ビルド時にHTMLファイル、CSSファイル、J Sファイル画像フォルダが自動作成|
|CSS：CSSフォルダにリセットCSS ファイル専用のCSSファイルが作成|
|SCSSフォルダ内で関数やMixin|base、reset記載(cocomate環境）|
|px→myrem|
|robots.tet サイトマップ　本番環境のURL入れる|





|Command|Action|
|:----|:----|
|npm install|scssインストール|
|npm run dev|astroスタート|
|npm run build|ビルド|
|npm run preview|プレビュー|


|astro.config|
|:----|
|path 　ビルド時のファイル名変更　path変更|
|site　本番環境のURL|
|return "assets/css/[name]-[hash][extname]";   ビルド時のファイル名|

|clam→myCl(最小値|最大値|最小ビューポート|最大ビューポート)|
|:----|:----|:----|:----|
