import Messages from "./messages.js";


const main = async () => {
    Messages.connect();
    Messages.handleCommand("!help", `
*!querida* -> Uma mensagem fofa
*!teste* -> Outra mensagem fofa
*!duvido* -> Uma ajuda fofa
*!vampeta* -> Uma foto fofa
*!gatinho* -> Um gatinho fofo
    `)

    Messages.handleCommand("!querida", "QUERIDA É MINHA XERECA");
    Messages.handleCommand("!teste", "VAI TOMAR NO CU PIRANHA");
    Messages.handleCommand("!duvido", "MEU PAU NO SEU OUVIDO");
    Messages.sendMediaMessage("!vampeta", "./media/vampeta.jpg");
    Messages.sendMediaMessage("!gatinho", "./media/miau.mp3");
}

main()