const Reader = require("./Reader");
const Writer = require("./Writer");
const Processor = require("./Processor");
const Table = require("./Table");
const HtmlParser = require("./HtmlParser");
const PDFWriter = require("./PDFWriter");


let leitor = new Reader();
let escritor = new Writer();

 async function main(){
    let dados = await leitor.Read("./users.csv");
    let dadosProcessados = Processor.Process(dados);
    
    let users = new Table(dadosProcessados);

    let html = await HtmlParser.Parse(users);

    escritor.Write(Date.now() + ".html", html);
    PDFWriter.WritePDF(Date.now() + ".pdf", html);

 };

 main(); 

