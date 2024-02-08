export class Download {

  /**
   * Realiza o download de um arquivo
   *
   * @param fileName Nome do arquivo
   * @param typeFile Extensao do arquivo: .txt, .json, .pdf ...
   * @param data Arquivo que sera baixado
   *
   */
  public static downloadFile(fileName: string, typeFile: string, data: any){
    let downloadLink = window.document.createElement('a');
    downloadLink.href = window.URL.createObjectURL(new Blob([data], {type: data.type}));
    downloadLink.download = `${fileName}${typeFile}`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  }

}
