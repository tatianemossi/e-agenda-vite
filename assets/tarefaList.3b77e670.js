var m=Object.defineProperty;var b=(t,e,a)=>e in t?m(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var c=(t,e,a)=>(b(t,typeof e!="symbol"?e+"":e,a),a);import"./modulepreload-polyfill.c7c6310f.js";import{T as h}from"./tarefa.repositorio.local-storage.8ffd05cf.js";import"./guid.model.16afb711.js";class u{constructor(e){c(this,"tabela");this.repositorioTarefas=e,this.configurarElementos(),this.atualizarTabela()}configurarElementos(){this.tabela=document.getElementById("tabela")}atualizarTabela(){const e=this.repositorioTarefas.selecionarTodos();let a=this.tabela.getElementsByTagName("tbody")[0];e.forEach(r=>{const s=a.insertRow();Object.values(r).forEach(o=>{const d=s.insertCell();d.innerText=o});const l=s.insertCell(),i=document.createElement("a");i.innerText="Editar",i.className="btn btn-primary me-1",i.addEventListener("click",()=>{const o=r.id;window.location.href=`tarefa.create.html?id=${o}`});const n=document.createElement("a");n.innerText="Excluir",n.className="btn btn-secondary",n.addEventListener("click",()=>{const o=r.id;this.repositorioTarefas.excluir(o),window.location.reload()}),l.appendChild(i),l.appendChild(n)})}}new u(new h);
