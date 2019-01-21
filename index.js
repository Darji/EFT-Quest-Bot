const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity(`Version 0.0.1`, {type: 'playing'});
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);






//test command
if (cmd === `${prefix}hello`){
  let attachment = new Discord.Attachment()
   .setAttachment ("https://i.imgur.com/w3duR07.png");
  return message.channel.send("hello!", attachment);
}


if(message.content.startsWith(`${prefix}test`)){

  message.member.send(`?Prapor \n Therapist`  );

}


// help command



if(message.content.startsWith(`${prefix}help`)){

  message.member.send(`https://cdn.discordapp.com/attachments/530197670170460191/530464278478716928/dsfasfadfgagg.png`)


  message.member.send(`Hello, please select a trader. \n ?Prapor \n ?Therapist \n ?Fence  `)



}



/*

\n ?Skier \n ?Peacekeeper \n ?Mechanic \n ?Ragman

*/












//Prapor Command Line






if(message.content.startsWith(`${prefix}Prapor`)){

  message.member.send(`https://cdn.discordapp.com/attachments/530197670170460191/530818327812243466/Prapor_Portrait.png`)

  message.member.send(`Hello, please select a quest. \n ?Debut \n ?Checking \n ?Shootout Picnic \n ?Delivery From the Past \n ?BP Depot \n ?Bad Rep Evidence \n ?Ice Cream Cones \n ?Postman Pat - Part 1 \n ?Shaking Up Teller \n ?The Punisher - Part 1 \n ?The Punisher - Part 2 \n ?The Punisher - Part 3 \n ?The Punisher - Part 4 \n ?The Punisher - Part 5 \n ?The Punisher - Part 6 \n ?Polikhim Hobo \n ?No Offence \n ?Perfect mediator \n ?Insomnia \n ?Test drive - Part 1 `)

}








if(message.content.startsWith(`${prefix}Debut`)){

  message.member.send(`https://cdn.discordapp.com/attachments/530419328672202752/530498042667728906/Debut1.PNG`)

  message.member.send(`https://cdn.discordapp.com/attachments/530419328672202752/530498042546356234/Debut2.PNG`)


}

if(message.content.startsWith(`${prefix}Checking`)){

  message.member.send(`https://cdn.discordapp.com/attachments/530419328672202752/530497680527458325/Checking1.PNG`)

  message.member.send(`https://cdn.discordapp.com/attachments/530419328672202752/530497678602141727/Checking2.PNG`)

  message.member.send(`https://www.youtube.com/watch?v=N3suIfz3cxI`)


}

if(message.content.startsWith(`${prefix}Shootout Picnic`)){

  message.member.send(`https://cdn.discordapp.com/attachments/530419328672202752/530513122717597700/Shootout.PNG`)

  message.member.send(`https://www.youtube.com/watch?v=JrrSit9CwpE`)

  
}

if(message.content.startsWith(`${prefix}Delivery From the Past`)){

  message.member.send(`https://cdn.discordapp.com/attachments/530419328672202752/530523350317924363/Delivery_From_the_Past.PNG`)

  message.member.send(`https://cdn.discordapp.com/attachments/530419328672202752/530523348959232011/Delivery_From_the_Past1.PNG`)

  message.member.send(`https://www.youtube.com/watch?v=03zcFK7qWvQ`)

  
}

if(message.content.startsWith(`${prefix}BP Depot`)){

  message.member.send(`https://cdn.discordapp.com/attachments/530419328672202752/530529171890241538/bp_depot.PNG`)

  message.member.send(`https://cdn.discordapp.com/attachments/530419328672202752/530529171399639040/bp_depot1.PNG`)

  message.member.send(`https://www.youtube.com/watch?v=HO3gT6hGY1w`)

  
}

if(message.content.startsWith(`${prefix}Bad Rep Evidence`)){

  message.member.send(`https://cdn.discordapp.com/attachments/530419328672202752/530532948181516289/bad_rep.PNG`)

  message.member.send(`https://cdn.discordapp.com/attachments/530419328672202752/530532946973687809/bad_rep1.PNG`)

  message.member.send(`https://www.youtube.com/watch?v=XhUUGE62UcI`)

  
}

if(message.content.startsWith(`${prefix}Ice Cream Cones`)){

  message.member.send(`https://cdn.discordapp.com/attachments/530419328672202752/530532948181516289/bad_rep.PNG`)

  message.member.send(`https://cdn.discordapp.com/attachments/530419328672202752/530532946973687809/bad_rep1.PNG`)

  message.member.send(`https://www.youtube.com/watch?v=Fdb7dZ-5W1U`)

  
}

if(message.content.startsWith(`${prefix}Postman Pat - Part 1`)){

  message.member.send(`https://cdn.discordapp.com/attachments/530419328672202752/530542625284161536/postman.PNG`)

  message.member.send(`https://cdn.discordapp.com/attachments/530419328672202752/530542624939966476/postman1.PNG`)

  message.member.send(`https://www.youtube.com/watch?v=a31mbltAzdo`)

  
}

if(message.content.startsWith(`${prefix}Shaking Up Teller`)){

  message.member.send(`https://cdn.discordapp.com/attachments/530419328672202752/530548498203017226/shakinguptheteller.PNG`)

  message.member.send(`https://cdn.discordapp.com/attachments/530419328672202752/530548497339121665/shakinguptheteller1.PNG`)

  message.member.send(`https://www.youtube.com/watch?v=wUBXx6RtkEg`)

  
}

if(message.content.startsWith(`${prefix}The Punisher - Part 1`)){

  message.member.send(`https://cdn.discordapp.com/attachments/530419328672202752/530549715293437975/punisherpt1.PNG`)

  message.member.send(`https://cdn.discordapp.com/attachments/530419328672202752/530549713771167754/punisherpt12.PNG`)


  
}

if(message.content.startsWith(`${prefix}The Punisher - Part 2`)){

  message.member.send(`https://cdn.discordapp.com/attachments/530419328672202752/530551755180605461/punisherpt2.PNG`)

  message.member.send(`https://cdn.discordapp.com/attachments/530419328672202752/530551594555801600/punisherpt22.PNG`)



  
}

if(message.content.startsWith(`${prefix}The Punisher - Part 3`)){

  message.member.send(`https://cdn.discordapp.com/attachments/530419328672202752/530552460935168030/punisherpt3.PNG`)

  message.member.send(`https://www.youtube.com/watch?v=XHIBPVrlhII`)

  
}

if(message.content.startsWith(`${prefix}The Punisher - Part 4`)){

  message.member.send(`https://cdn.discordapp.com/attachments/530419328672202752/530554139579645953/punisherpt4.PNG`)

  message.member.send(`https://cdn.discordapp.com/attachments/530419328672202752/530554128557146132/punisherpt42.PNG`)

  

  
}

if(message.content.startsWith(`${prefix}The Punisher - Part 5`)){

  message.member.send(`https://cdn.discordapp.com/attachments/530419328672202752/530554945896841216/punisherpt5.PNG`)

  message.member.send(`https://cdn.discordapp.com/attachments/530419328672202752/530554956948701206/punisherpt52.PNG`)

 

  
}

if(message.content.startsWith(`${prefix}The Punisher - Part 6`)){

  message.member.send(`https://cdn.discordapp.com/attachments/530419328672202752/530555792139616266/punisherpt6.PNG`)

  message.member.send(`https://cdn.discordapp.com/attachments/530419328672202752/530555789967097858/punisherpt62.PNG`)

  message.member.send(`https://www.youtube.com/watch?v=NC6wixGyfJM`)

  
}


if(message.content.startsWith(`${prefix}Polikhim Hobo`)){

  message.member.send(`https://cdn.discordapp.com/attachments/530419328672202752/530556613388402698/hobopt1.PNG`)

  

  message.member.send(`https://www.youtube.com/watch?v=qKuODzzW7sM`)

  
}

if(message.content.startsWith(`${prefix}Big Customer`)){

  message.member.send(`https://cdn.discordapp.com/attachments/530419328672202752/530558105382027304/customer.PNG`)

  message.member.send(`https://cdn.discordapp.com/attachments/530419328672202752/530548497339121665/shakinguptheteller1.PNG`)

  

  
}

if(message.content.startsWith(`${prefix}No Offence`)){

  message.member.send(`https://cdn.discordapp.com/attachments/530197670170460191/530813154947760128/offence.PNG`)

  message.member.send(`https://cdn.discordapp.com/attachments/530197670170460191/530813153529954372/offence2.PNG`)

  

  
}

if(message.content.startsWith(`${prefix}Grenadier`)){

  message.member.send(`https://cdn.discordapp.com/attachments/530197670170460191/530814398231478274/granader.PNG`)

  

  

  
}

if(message.content.startsWith(`${prefix}Perfect mediator`)){

  message.member.send(`https://cdn.discordapp.com/attachments/530197670170460191/530814681326026783/mediator.PNG`)


  

  
}

if(message.content.startsWith(`${prefix}Insomnia`)){

  message.member.send(`https://cdn.discordapp.com/attachments/530197670170460191/530815034956316698/insomia.PNG`)

  

  

  
}

if(message.content.startsWith(`${prefix}Test drive - Part 1`)){

  message.member.send(`https://cdn.discordapp.com/attachments/530197670170460191/530815410212438033/test_drive_pt1.PNG`)

  

  

  
}




















//Therapist quest line






if(message.content.startsWith(`${prefix}Therapist`)){

  message.member.send(`https://cdn.discordapp.com/attachments/530197670170460191/530818340952997898/Therapist_Portrait.png`)

  message.member.send(`Hello, please select a quest. \n ?Shortage \n ?Sanitary Standards - Part 1 \n ?Sanitary Standards - Part 2 \n ?Operation Aquarius - Part 1 \n ?Operation Aquarius - Part 2 \n ?Painkiller \n ?Pharmacist \n ?Supply Plans \n ?General Wares \n ?Car Repair \n ?Health Care Privacy - Part 1 \n ?Health Care Privacy - Part 2 \n ?Health Care Privacy - Part 3 \n ?Health Care Privacy - Part 4 \n ?Health Care Privacy - Part 5 \n ?Postman Pat - Part 2 \n ?Out of Curiosity \n ?Trust Regain \n ?Private clinic \n ?Athlete \n ?Decontamination service `)

}












if(message.content.startsWith(`${prefix}Shortage`)){

  message.member.send(`https://cdn.discordapp.com/attachments/530197670170460191/530816710119391242/shortage1.PNG`)

  message.member.send(`https://cdn.discordapp.com/attachments/530197670170460191/530816709410422785/shortage2.PNG`)

  message.member.send(` https://www.youtube.com/watch?v=rw0O_541NZ0`)


}

if(message.content.startsWith(`${prefix}Sanitary Standards - Part 1`)){

  message.member.send(`https://cdn.discordapp.com/attachments/530197670170460191/530823338327539727/panitypt1.PNG`)

  message.member.send(`https://cdn.discordapp.com/attachments/530197670170460191/530823336452685845/panitypt12.PNG`)

  message.member.send(`https://www.youtube.com/watch?v=YQLYrM3ltyg`)


}

if(message.content.startsWith(`${prefix}Sanitary Standards - Part 2`)){

  message.member.send(`https://cdn.discordapp.com/attachments/530197670170460191/530824097010024470/panitypt2.PNG`)

  message.member.send(`https://cdn.discordapp.com/attachments/530197670170460191/530824094552162326/panitypt22.PNG`)

  message.member.send(`https://www.youtube.com/watch?v=YQLYrM3ltyg`)


}

if(message.content.startsWith(`${prefix}Operation Aquarius - Part 1`)){

  message.member.send(`https://cdn.discordapp.com/attachments/530197670170460191/531661553787731968/aquarispt1.PNG`)

  message.member.send(`https://cdn.discordapp.com/attachments/530197670170460191/531661553787731968/aquarispt1.PNG`)

  message.member.send(`https://www.youtube.com/watch?v=yNbAPgE2MKQ`)


}

if(message.content.startsWith(`${prefix}Operation Aquarius - Part 2`)){

  message.member.send(`https://cdn.discordapp.com/attachments/530197670170460191/531662273249411097/aquarispt2.PNG`)

  message.member.send(`https://cdn.discordapp.com/attachments/530197670170460191/531662271953371137/aquarispt21.PNG`)

  


}

if(message.content.startsWith(`${prefix}Painkiller`)){

  message.member.send(`https://cdn.discordapp.com/attachments/530197670170460191/531664545807073299/painkiller.PNG`)

  message.member.send(`https://cdn.discordapp.com/attachments/530197670170460191/531664538521698316/painkiller2.PNG`)

  message.member.send(`https://www.youtube.com/watch?v=P-KvMp71lMQ`)


}

if(message.content.startsWith(`${prefix}Pharmacist`)){

  message.member.send(`https://cdn.discordapp.com/attachments/530197670170460191/530816710119391242/shortage1.PNG`)

  message.member.send(`https://cdn.discordapp.com/attachments/530197670170460191/530816709410422785/shortage2.PNG`)

  message.member.send(`https://www.youtube.com/watch?v=o0wB4pZHbkk`)


}

if(message.content.startsWith(`${prefix}Supply Plans`)){

  message.member.send(`https://cdn.discordapp.com/attachments/530197670170460191/531667806924832768/supplyplans.PNG`)

  message.member.send(`https://cdn.discordapp.com/attachments/530197670170460191/531667805687250944/supplyplans2.PNG`)

  message.member.send(`https://www.youtube.com/watch?v=sZMoQNWLtFY`)


}

if(message.content.startsWith(`${prefix}General Wares`)){

  message.member.send(`https://cdn.discordapp.com/attachments/530197670170460191/532730152220622858/wares1.PNG`)

  message.member.send(`https://cdn.discordapp.com/attachments/530197670170460191/532730150631243797/wares2.PNG`)

  message.member.send(`https://www.youtube.com/watch?v=P3FZo6ejQCc`)


}

if(message.content.startsWith(`${prefix}Car Repair`)){

  message.member.send(`https://cdn.discordapp.com/attachments/530197670170460191/532730656317505568/repair1.PNG`)

  message.member.send(`https://cdn.discordapp.com/attachments/530197670170460191/532730646636920852/repair2.PNG`)

  message.member.send(`https://www.youtube.com/watch?v=4bFCtRmIuok`)


}

if(message.content.startsWith(`${prefix}Health Care Privacy - Part 1`)){

  message.member.send(`https://cdn.discordapp.com/attachments/530197670170460191/532731764867727400/privpt1.PNG`)

  message.member.send(`https://cdn.discordapp.com/attachments/530197670170460191/532731766222356480/privpt11.PNG`)

  message.member.send(` https://www.youtube.com/watch?v=rN7MPx4blYk`)


}

if(message.content.startsWith(`${prefix}Health Care Privacy - Part 2`)){

  message.member.send(`https://cdn.discordapp.com/attachments/530197670170460191/532731790029225986/privpt2.PNG`)

  message.member.send(`https://cdn.discordapp.com/attachments/530197670170460191/532731789060472832/privpt22.PNG`)

  message.member.send(` https://www.youtube.com/watch?v=Gcfyr48NmVU&t=4s`)


}

if(message.content.startsWith(`${prefix}Health Care Privacy - Part 3`)){

  message.member.send(`https://cdn.discordapp.com/attachments/530197670170460191/532731804420145152/privpt3.PNG`)

  message.member.send(`https://cdn.discordapp.com/attachments/530197670170460191/532731820706627634/privpt33.PNG`)

  message.member.send(` https://www.youtube.com/watch?v=BRruJLfxtK4`)


}

if(message.content.startsWith(`${prefix}Health Care Privacy - Part 4`)){

  message.member.send(`https://cdn.discordapp.com/attachments/530197670170460191/532731834031800322/privpt4.PNG`)

 

  message.member.send(` https://www.youtube.com/watch?v=rw0O_541NZ0`)


}

if(message.content.startsWith(`${prefix}Health Care Privacy - Part 5`)){

  message.member.send(`https://cdn.discordapp.com/attachments/530197670170460191/532731845666799620/privpt5.PNG`)

  message.member.send(`https://cdn.discordapp.com/attachments/530197670170460191/532731845574524978/privpt55.PNG`)

  message.member.send(` https://www.youtube.com/watch?v=T1UUagGo9g4`)


}

if(message.content.startsWith(`${prefix}Postman Pat - Part 2`)){

  message.member.send(`https://cdn.discordapp.com/attachments/530197670170460191/532733929258483712/pat1.PNG`)

  message.member.send(`https://cdn.discordapp.com/attachments/530197670170460191/532733925886394389/pat2.PNG`)

  


}

if(message.content.startsWith(`${prefix}Out of Curiosity`)){

  message.member.send(`https://cdn.discordapp.com/attachments/530197670170460191/532733945238913034/curosity1.PNG`)

  message.member.send(`https://cdn.discordapp.com/attachments/530197670170460191/532733944236474378/curosity2.PNG`)

  


}

if(message.content.startsWith(`${prefix}Trust Regain`)){

  message.member.send(`https://cdn.discordapp.com/attachments/530197670170460191/532733959252082689/trust1.PNG`)

  message.member.send(`https://cdn.discordapp.com/attachments/530197670170460191/532733957112987648/trust2.PNG`)

  


}

if(message.content.startsWith(`${prefix}Private clinic`)){

  message.member.send(`https://cdn.discordapp.com/attachments/530197670170460191/532733975114940427/clinic1.PNG`)

  message.member.send(`https://cdn.discordapp.com/attachments/530197670170460191/532733973466579012/clinic2.PNG`)

  


}

if(message.content.startsWith(`${prefix}Athlete`)){

  message.member.send(`https://cdn.discordapp.com/attachments/530197670170460191/532733991384514560/athlete.PNG`)

 

  


}

if(message.content.startsWith(`${prefix}Decontamination service`)){

  message.member.send(`https://cdn.discordapp.com/attachments/530197670170460191/532734000498999296/service.PNG`)

  

  message.member.send(`https://www.youtube.com/watch?v=sZ7wDbxK4ag`)


}




























/*


if(message.content.startsWith(`${prefix}Therapist`)){

  message.member.send(`https://cdn.discordapp.com/attachments/530197670170460191/530818340952997898/Therapist_Portrait.png`)

  message.member.send(`Hello, please select a quest. \n ?Shortage \n ?Sanitary Standards - Part 1 \n ?Sanitary Standards - Part 2 \n ?Operation Aquarius - Part 1 \n ?Operation Aquarius - Part 2 \n ?Painkiller \n ?Pharmacist \n ?Supply Plans \n ?General Wares \n ?Car Repair \n ?Health Care Privacy - Part 1 \n ?Health Care Privacy - Part 2 \n ?Health Care Privacy - Part 3 \n ?Health Care Privacy - Part 4 \n ?Health Care Privacy - Part 5 \n ?Postman Pat - Part 2 \n ?Out of Curiosity \n ?Trust Regain \n ?Private clinic \n ?Athlete \n ?Decontamination service `)

}












if(message.content.startsWith(`${prefix}Shortage`)){

  message.member.send(`https://cdn.discordapp.com/attachments/530197670170460191/530816710119391242/shortage1.PNG`)

  message.member.send(`https://cdn.discordapp.com/attachments/530197670170460191/530816709410422785/shortage2.PNG`)

  message.member.send(` https://www.youtube.com/watch?v=rw0O_541NZ0`)


}



















*/









});

bot.login(botconfig.token);