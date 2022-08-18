var m=Object.defineProperty;var h=(s,t,e)=>t in s?m(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var o=(s,t,e)=>(h(s,typeof t!="symbol"?t+"":t,e),e);import{E as d}from"./entidadeBase.model.60fd366e.js";import{G as g}from"./guid.model.16afb711.js";class c extends d{constructor(e,a,i,r,n,l){super();o(this,"nome");o(this,"email");o(this,"telefone");o(this,"empresa");o(this,"cargo");l&&(this.id=l),this.nome=e,this.email=a,this.telefone=i,this.empresa=r,this.cargo=n}}class u{constructor(){o(this,"localStorage");o(this,"contatos");this.localStorage=window.localStorage,this.contatos=this.selecionarTodos()}gravar(){const t=JSON.stringify(this.contatos);this.localStorage.setItem("contatos",t)}inserir(t){t.id=new g().gerarNovoId(),this.contatos.push(t),this.gravar()}editar(t,e){const a=this.contatos.findIndex(i=>i.id===t);this.contatos[a]={id:t,nome:e.nome,email:e.email,telefone:e.telefone,empresa:e.empresa,cargo:e.cargo},this.gravar()}excluir(t){this.contatos=this.contatos.filter(e=>e.id!==t),this.gravar()}selecionarTodos(){const t=this.localStorage.getItem("contatos");return t?JSON.parse(t):[]}selecionarPorId(t){return this.contatos.find(e=>e.id===t)}}class x{constructor(t,e){o(this,"txtNome");o(this,"txtEmail");o(this,"txtTelefone");o(this,"txtEmpresa");o(this,"txtCargo");o(this,"btnSalvar");o(this,"idSelecionado");if(this.repositorioContatos=t,this.configurarElementos(),e){this.idSelecionado=e;const a=this.repositorioContatos.selecionarPorId(e);a&&this.preencherFormulario(a)}}preencherFormulario(t){this.txtNome.value=t.nome,this.txtEmail.value=t.email,this.txtTelefone.value=t.telefone,this.txtEmpresa.value=t.empresa,this.txtCargo.value=t.cargo}configurarElementos(){this.txtNome=document.getElementById("txtNome"),this.txtEmail=document.getElementById("txtEmail"),this.txtTelefone=document.getElementById("txtTelefone"),this.txtEmpresa=document.getElementById("txtEmpresa"),this.txtCargo=document.getElementById("txtCargo"),this.btnSalvar=document.getElementById("btnSalvar"),this.btnSalvar.addEventListener("click",t=>this.gravarRegistros())}gravarRegistros(){const t=this.obterDadosFormulario();this.idSelecionado?this.repositorioContatos.editar(t.id,t):this.repositorioContatos.inserir(t),window.location.href="contato.list.html"}obterDadosFormulario(){const t=this.txtNome.value,e=this.txtEmail.value,a=this.txtTelefone.value,i=this.txtEmpresa.value,r=this.txtCargo.value;let n=null;return this.idSelecionado?n=new c(t,e,a,i,r,this.idSelecionado):n=new c(t,e,a,i,r),n}}const f=new URLSearchParams(window.location.search),p=f.get("id");new x(new u,p);
