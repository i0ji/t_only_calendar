<h2> Slide calendar that implements the test task for the position of FE developer in "Only"</h2>

Available: https://i0ji.github.io/t_only_calendar/

<h3>To run:</h5>
<b>Powershell/bash:</b><br>
1: using powershell/bash <code>git clone https://github.com/i0ji/t_only_calendar</code><br>
2: <code>cd t_only_calendar</code><br>
3: <code>pnpm install</code><br>
4: <code>pnpm start</code><br>
5: open <code>http://localhost:3000/</code> in browser<br>

<h3>Libs/tech/loaders usage:</h5>
<ul>
<li>React/TS/SASS</li>
  <li>Libs:
    <ul>
      <li>GSAP</li>
      <li>Swiper</li>
      <li>React-flip-numbers</li>
   </ul>
    <li>GH-Pages</li>
   <li>Webpack</li>
<li>Loaders/plugins: 
    <ul>
        <li>webpack-dev-server</li>
        <li>mini-css-extract-plugin</li>
        <li>file-loader</li>
        <li>CSS/SASS-loader</li>
        <li>html-webpack-plugin</li>
    </ul>
</li>
<li>Commitizen</li>
</ul>

<h3>Short commit comments:</h5> 
21.05.25:
project init using webpack/react/sass/ts/git flow; repo init; first dev run; styling and preparigne env;
main markup, style, set webpack;<br>
22.05.25:
add nanoid lib; add data sets; start swiper;
main logic: slider, gsap circle animation; add data sets;
refactor basic markup/layout;<br>
23.05.25
finished basic carousel layot: finish float date, crosslines, fload active label;
start bottom slider;<br>
24.05.25
style, common fixes;
add buttons visibility logic when rich the end or at the begining;
fix slider style;<br>
26.05.25
multiple logic/style/format refactor; mobile version; disable button logic;
GH-paghes for tests;<br>
27.05.25
finish all logic but memoise slider nav buttons;
29.05.25
small style/layout touches; deps update;
setup gh-pages;

