import moment from "moment";
import { EMPTY, Subscription, interval } from "rxjs";

export class utilGeral {
 
  valida(cpf: any) {
    if (!cpf) return false;
    if (typeof cpf !== 'string') return false;
    if (cpf.length !== 11) return false;
    if (this.isSequencia(cpf)) return false;
    return true;
  }

 isSequencia(cpf: any) {
    return cpf.charAt(0).repeat(11) === cpf;
 }

public static dataFormata(data:any){
  return (moment(data)).format('DD/MM/yyyy')
}

public static dataFormataSend(data:any){
  return (moment(data)).format('yyyy-MM-DD')
}

public static dataFormataInput(data:any){
  return (moment(data)).format('yyyy/MM/DD')
}

public static retirarFormatacao(campoTexto:any) {
  campoTexto.value = campoTexto.value.replace(/(\.|\/|\-)/g,"");
}

public static mascaraCpfCNPJ(cpfCnpj:any) {

  if(cpfCnpj.length == 11){
    return this.mascaraCpf(cpfCnpj);
  } else {
    return this.mascaraCnpj(cpfCnpj);
  }
}

public static mascaraCpf(cpf:any) {
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g,"\$1.\$2.\$3\-\$4");
}

public static mascaraCnpj(cnpj:any) {
  return cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g,"\$1.\$2.\$3\/\$4\-\$5");
}
public static removeAspas(token: string) {
  return token.replace(/[\\"]/g, '');
}

tempoDecorridoEmSegundos: number = 0;
dataInicioTimer: Date = new Date();
subscriptionTimer: Subscription = EMPTY.subscribe();

iniciarTimer() {
  const umSegundoEmMS = 1e3;
  this.dataInicioTimer = new Date();
  this.tempoDecorridoEmSegundos = 0;
  this.subscriptionTimer = interval(umSegundoEmMS)
  .subscribe(() => this.atualizarTimer());
}

atualizarTimer() {
  const dataAtual = new Date();
  this.tempoDecorridoEmSegundos = Math.floor(
    (dataAtual.getTime() -
      this.dataInicioTimer.getTime()) /
      1000
  );
}

pararTimer() {
  this.subscriptionTimer.unsubscribe();
}
//https://consolelog.com.br/como-criar-um-teste-unitario-envolvendo-timers-angular/
}
 