import{_ as n,e as a}from"./app.530372a1.js";const s={},e=a(`<h1 id="dubbo-go-demo" tabindex="-1"><a class="header-anchor" href="#dubbo-go-demo" aria-hidden="true">#</a> dubbo-go-demo</h1><h4 id="\u63D0\u4F9Bdubbo-go-server-\u652F\u6301java-client\u548Cgo-client-\u540C\u65F6\u8C03\u7528" tabindex="-1"><a class="header-anchor" href="#\u63D0\u4F9Bdubbo-go-server-\u652F\u6301java-client\u548Cgo-client-\u540C\u65F6\u8C03\u7528" aria-hidden="true">#</a> \u63D0\u4F9Bdubbo-go-server \u652F\u6301java-client\u548Cgo-client \u540C\u65F6\u8C03\u7528</h4><h5 id="\u6CE8\u518C\u4E2D\u5FC3\u4F7F\u7528zk-\u8BB0\u5F97\u542F\u52A8zk-\u5982\u4E0B-\u4F7F\u7528docker\u8DD1\u4E00\u4E2Azk" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u518C\u4E2D\u5FC3\u4F7F\u7528zk-\u8BB0\u5F97\u542F\u52A8zk-\u5982\u4E0B-\u4F7F\u7528docker\u8DD1\u4E00\u4E2Azk" aria-hidden="true">#</a> \u6CE8\u518C\u4E2D\u5FC3\u4F7F\u7528zk\uFF0C\u8BB0\u5F97\u542F\u52A8zk;\u5982\u4E0B\uFF0C\u4F7F\u7528docker\u8DD1\u4E00\u4E2Azk</h5><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> run -d --name<span class="token operator">=</span>zk -p <span class="token number">2181</span>:2181  zookeeper:3.4.9 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h5 id="\u73AF\u5883\u521D\u59CB\u5316" tabindex="-1"><a class="header-anchor" href="#\u73AF\u5883\u521D\u59CB\u5316" aria-hidden="true">#</a> \u73AF\u5883\u521D\u59CB\u5316</h5><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span>  dubbo-go-demo
go mod tidy
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h5 id="\u8FD0\u884Cgo-server" tabindex="-1"><a class="header-anchor" href="#\u8FD0\u884Cgo-server" aria-hidden="true">#</a> \u8FD0\u884Cgo-server</h5><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> dubbo-go-demo/go-server
<span class="token comment"># export DUBBO_GO_CONFIG_PATH=$PATH_TO_APP/conf/dubbogo.yaml</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">DUBBO_GO_CONFIG_PATH</span><span class="token operator">=</span> ~/dubbo-go-demo/go-server/conf/dubbogo.yaml

go run cmd/app.go

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h5 id="\u8FD0\u884Cgo-client" tabindex="-1"><a class="header-anchor" href="#\u8FD0\u884Cgo-client" aria-hidden="true">#</a> \u8FD0\u884Cgo-client</h5><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> dubbo-go-demo/go-client
<span class="token comment"># export DUBBO_GO_CONFIG_PATH=$PATH_TO_APP/conf/dubbogo.yaml</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">DUBBO_GO_CONFIG_PATH</span><span class="token operator">=</span> ~/dubbo-go-demo/go-client/conf/dubbogo.yaml

go run cmd/app.go
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h5 id="\u8FD0\u884Cjava\u5BA2\u6237\u7AEF" tabindex="-1"><a class="header-anchor" href="#\u8FD0\u884Cjava\u5BA2\u6237\u7AEF" aria-hidden="true">#</a> \u8FD0\u884Cjava\u5BA2\u6237\u7AEF</h5><p>\u4E0B\u8F7Djava\u5BA2\u6237\u7AEF\u4EE3\u7801</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/tiantianlikeu/dubbo-java-client.git
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="\u770B\u770B\u6211" tabindex="-1"><a class="header-anchor" href="#\u770B\u770B\u6211" aria-hidden="true">#</a> \u770B\u770B\u6211</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5982\u679C\u4F60\u89C9\u5F97\u6709\u7528\u8BF7\u7ED9\u4E2A\u5C0F\u661F\u661F\uFF0C\u5982\u679C\u4F60\u6709\u5EFA\u8BAE\u8BF7\u63D0\u4E2Aissue.
\u4E00\u8D77\u5171\u540C\u5B66\u4E60~
\u540E\u7EED\u53EF\u80FD\u4F1A\u589E\u52A0server\u7AEF\u7684\u6570\u636E\u5E93\u8FDE\u63A5\uFF0Credis\uFF0Crmq\uFF0Cdao\u7684\u4E00\u4E9B\u64CD\u4F5C
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="\u9879\u76EE\u7ED3\u6784\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u7ED3\u6784\u8BF4\u660E" aria-hidden="true">#</a> \u9879\u76EE\u7ED3\u6784\u8BF4\u660E</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.
\u251C\u2500\u2500 README.md
\u251C\u2500\u2500 api // \u7C7B\u4F3C\u4E8Ejava\u4E2D\u5BF9\u5916\u63D0\u4F9B\u7684interface\u6A21\u5757
\u2502   \u2514\u2500\u2500 UserApi.go
\u251C\u2500\u2500 entity // \u7C7B\u4F3C\u4E8Ejava\u4E2D\u5BF9\u5916\u63D0\u4F9B\u7684model\u6A21\u5757
\u2502   \u2514\u2500\u2500 User.go
\u251C\u2500\u2500 go-client
\u2502   \u251C\u2500\u2500 cmd
\u2502   \u2502   \u2514\u2500\u2500 app.go // \u7CFB\u7EDF\u542F\u52A8\u5165\u53E3\uFF0C\u6709\u70B9\u50CFspringboot\u7684application
\u2502   \u251C\u2500\u2500 conf
\u2502   \u2502   \u2514\u2500\u2500 dubbogo.yaml // \u5BA2\u6237\u7AEF\u914D\u7F6E\u6587\u4EF6
\u2502   \u2514\u2500\u2500 server_init
\u2502       \u2514\u2500\u2500 dubbo_init.go // \u670D\u52A1\u6CE8\u518C
\u251C\u2500\u2500 go-server
\u2502   \u251C\u2500\u2500 cmd
\u2502   \u2502   \u2514\u2500\u2500 app.go // \u7CFB\u7EDF\u542F\u52A8\u5165\u53E3
\u2502   \u251C\u2500\u2500 conf
\u2502   \u2502   \u2514\u2500\u2500 dubbogo.yaml // \u670D\u52A1\u7AEF\u914D\u7F6E\u6587\u4EF6
\u2502   \u251C\u2500\u2500 impl // \u5BF9\u5916\u63D0\u4F9B\u7684\u670D\u52A1\u5B9E\u73B0\u7C7B
\u2502   \u2502   \u2514\u2500\u2500 UserApiImpl.go 
\u2502   \u251C\u2500\u2500 server_init
\u2502   \u2502   \u2514\u2500\u2500 dubbo_init.go // \u670D\u52A1\u521D\u59CB\u5316
\u2502   \u2514\u2500\u2500 service // \u8FD9\u91CC\u5199\u4E1A\u52A1\u903B\u8F91\u6A21\u5757
\u2502       \u2514\u2500\u2500 UserService.go 
\u251C\u2500\u2500 go.mod
\u2514\u2500\u2500 go.sum

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div>`,17);function r(l,i){return e}var o=n(s,[["render",r],["__file","dubbo_go_demo.html.vue"]]);export{o as default};
