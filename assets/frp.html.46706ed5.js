import{_ as n,e as s}from"./app.530372a1.js";const a={},p=s(`<h1 id="docker\u642D\u5EFAfrp" tabindex="-1"><a class="header-anchor" href="#docker\u642D\u5EFAfrp" aria-hidden="true">#</a> docker\u642D\u5EFAfrp</h1><p>frp \u5185\u7F51\u7A7F\u900F \u5B98\u65B9\u6587\u6863\u94FE\u63A5\uFF1Ahttps://gofrp.org/docs/</p><h3 id="_1-\u642D\u5EFA\u670D\u52A1\u7AEF" tabindex="-1"><a class="header-anchor" href="#_1-\u642D\u5EFA\u670D\u52A1\u7AEF" aria-hidden="true">#</a> 1.\u642D\u5EFA\u670D\u52A1\u7AEF</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> ~/frp
<span class="token function">touch</span> ~/frp/frps.ini

<span class="token comment"># \u5199\u5165\u670D\u52A1\u7AEFfrps.ini</span>
<span class="token punctuation">[</span>common<span class="token punctuation">]</span>
bind_port <span class="token operator">=</span> <span class="token number">7000</span>
token <span class="token operator">=</span> xxxxxx
vhost_http_port <span class="token operator">=</span> <span class="token number">80</span>                 <span class="token comment">#\u5BA2\u6237\u7AEFhttp\u6620\u5C04\u7684\u7AEF\u53E3</span>
vhost_https_port <span class="token operator">=</span> <span class="token number">443</span>               <span class="token comment">#\u5BA2\u6237\u7AEFhttps\u6620\u5C04\u7684\u7AEF\u53E3</span>
dashboard_port <span class="token operator">=</span> <span class="token number">7071</span>
<span class="token comment">#dashboard_user = admin</span>
<span class="token comment">#dashboard_pwd = frp@#admin</span>



<span class="token comment"># start frps</span>
<span class="token function">docker</span> run --restart<span class="token operator">=</span>always --network <span class="token function">host</span> -d -v ~/frp/frps.ini:/etc/frp/frps.ini --name frps snowdreamtech/frps

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h3 id="_2-\u642D\u5EFA\u5BA2\u6237\u7AEF" tabindex="-1"><a class="header-anchor" href="#_2-\u642D\u5EFA\u5BA2\u6237\u7AEF" aria-hidden="true">#</a> 2.\u642D\u5EFA\u5BA2\u6237\u7AEF</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>
<span class="token function">mkdir</span> ~/frp
<span class="token function">touch</span> ~/frp/frpc.ini


<span class="token comment">#\u5199\u5165\u5BA2\u6237\u7AEF</span>
<span class="token punctuation">[</span>common<span class="token punctuation">]</span>
server_addr <span class="token operator">=</span> <span class="token number">127.0</span>.0.1
server_port <span class="token operator">=</span> <span class="token number">7000</span>
<span class="token comment">#token = xxxxxxxx</span>

admin_addr <span class="token operator">=</span> <span class="token number">127.0</span>.0.1
admin_port <span class="token operator">=</span> <span class="token number">7400</span>

<span class="token comment">#\u5185\u90E8\u670D\u52A1\u5668\u767B\u5F55</span>
<span class="token punctuation">[</span>ssh<span class="token punctuation">]</span>
<span class="token builtin class-name">type</span> <span class="token operator">=</span> tcp
local_ip <span class="token operator">=</span> <span class="token number">127.0</span>.0.1
local_port <span class="token operator">=</span> <span class="token number">22</span>
remote_port <span class="token operator">=</span> <span class="token number">2233</span>

<span class="token comment">#\u8BBF\u95EE\u5916\u90E8\u7F51\u7AD9</span>
<span class="token punctuation">[</span>a.example.com<span class="token punctuation">]</span>
<span class="token builtin class-name">type</span> <span class="token operator">=</span> http
local_port <span class="token operator">=</span> <span class="token number">2233</span>
custom_domains <span class="token operator">=</span> a.example.com


<span class="token comment"># start frpc</span>
<span class="token function">docker</span> run --restart<span class="token operator">=</span>always --network <span class="token function">host</span> -d -v ~/frp/frpc.ini:/etc/frp/frpc.ini --name frpc snowdreamtech/frpc

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div>`,6);function e(r,l){return p}var t=n(a,[["render",e],["__file","frp.html.vue"]]);export{t as default};
