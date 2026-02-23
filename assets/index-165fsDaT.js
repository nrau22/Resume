(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function c(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(n){if(n.ep)return;n.ep=!0;const i=c(n);fetch(n.href,i)}})();const u={fi:{contact:`
      <p>Auringonkierros 35 D 17, 67400 Kokkola</p>
      <p>044 526 4411 | nikorautio@outlook.com</p>
    `,educationTitle:"Koulutus",education:`
      <h3>Tieto- ja viestintätekniikan insinööritutkinto</h3>
      <p>Centria-ammattikorkeakoulu, Kokkola (08/2022 – Nykyinen)</p>

      <h3>Datanomi</h3>
      <p>Raahen Porvari ja Kauppakoulu, Raahe (08/2016 – 05/2019)</p>
    `,experienceTitle:"Työkokemus",experience:`
      <h3>Mobiilisovelluskehittäjä</h3>
      <p>Kauppakeskus Chydenia (06/2025 – 12/2025)</p>
      <p>Kauppakeskuksen mobiilisovelluksen kehitys: käyttöliittymän ja toiminnallisuuksien toteutus, tietokantaintegraatiot sekä testaus ja käyttöönoton tuki. Käytännön kokemusta sovelluskehityksestä ja tiimityöstä.</p>

      <h3>IT-tukiharjoittelija</h3>
      <p>Raahen Porvari ja Kauppakoulu (02/2019 – 05/2019)</p>
      <p>IT-tukipalvelujen tarjoaminen ja järjestelmien ylläpito.</p>

      <h3>Asiakaspalveluharjoittelija</h3>
      <p>Puuilo Oy (11/2017 – 02/2018)</p>
      <p>Asiakaspalvelu ja myymälän varastonhallinta.</p>

      <h3>Mobiilisovelluskehitysharjoittelija</h3>
      <p>Sparksoft Oy (07/2017)</p>
      <p>Mobiilisovelluksen kehitykseen osallistuminen.</p>
    `,skillsTitle:"Osaaminen",skills:`
      <p><strong>Frontend:</strong> React, React Native, Expo, JavaScript, TypeScript, HTML & CSS, Vite</p>
      <p><strong>Backend:</strong> Node.js, Express.js</p>
      <p><strong>Tietokannat:</strong> SQLite, relaatiotietokantojen perusteet</p>
      <p><strong>Työkalut:</strong> GitHub, VS Code</p>
    <ul>
        <li>Full stack -kehitys</li>
        <li>Mobiilisovelluskehitys (Android & iOS)</li>
        <li>Hallintapaneelien toteutus</li>
        <li>Testaus, käyttöönotto ja jatkokehitys</li>
        <li>Itsenäinen- ja projektityöskentely</li>
    </ul>
    `,languagesTitle:"Kielitaito",languages:`
      <p>Suomi: Äidinkieli</p>
      <p>Englanti: Erinomainen</p>
    `,button:"English",projectTitle:"Esittelyprojekti",projectDescription:`
      <p>Kehitin mobiilisovelluksen kauppakeskukselle vastaten käyttöliittymästä, keskeisistä toiminnallisuuksista ja tietokantaintegraatioista. Teknologioina käytin React Nativea, JavaScriptiä, REST-rajapintoja ja SQL-tietokantaa. Projekti sisälsi testauksen ja tiimityöskentelyä.</p>
    `,projectOpenImages:"(Avaa kuvat klikkaamalla)."},en:{contact:`
      <p>Auringonkierros 35 D 17, 67400 Kokkola</p>
      <p>+358 44 526 4411 | nikorautio@outlook.com</p>
    `,educationTitle:"Education",education:`
      <h3>Bachelor of Engineering in Information and Communication Technology</h3>
      <p>Centria University of Applied Sciences, Kokkola (08/2022 – Present)</p>

      <h3>Vocational Qualification in Business IT</h3>
      <p>Raahen Porvari ja Kauppakoulu, Raahe (08/2016 – 05/2019)</p>
    `,experienceTitle:"Work Experience",experience:`
      <h3>Mobile Application Developer</h3>
      <p>Kauppakeskus Chydenia (06/2025 – 12/2025)</p>
      <p>Development of a shopping center mobile application: UI and functionality implementation, database integrations, as well as testing and deployment support. Hands-on experience in app development and teamwork.</p>

      <h3>IT Support Intern</h3>
      <p>Raahen Porvari ja Kauppakoulu (02/2019 – 05/2019)</p>
      <p>Providing IT support services and maintaining systems.</p>

      <h3>Customer Service Intern</h3>
      <p>Puuilo Oy (11/2017 – 02/2018)</p>
      <p>Customer service and store inventory management.</p>

      <h3>Mobile Application Development Intern</h3>
      <p>Sparksoft Oy (07/2017)</p>
      <p>Participated in mobile application development.</p>
    `,skillsTitle:"Skills",skills:`
      <p><strong>Frontend:</strong> React, React Native, Expo, JavaScript, TypeScript, HTML & CSS, Vite</p>
      <p><strong>Backend:</strong> Node.js, Express.js</p>
      <p><strong>Databases:</strong> SQLite, basics of relational databases</p>
      <p><strong>Tools:</strong> GitHub, VS Code</p>
    <ul>
        <li>Full stack development</li>
        <li>Mobile app development (Android & iOS)</li>
        <li>Admin panels</li>
        <li>Testing, deployment, and further development</li>
        <li>Independent and project work</li>
    </ul>
    `,languagesTitle:"Languages",languages:`
      <p>Finnish: Native</p>
      <p>English: Excellent</p>
    `,button:"Finnish",projectTitle:"Featured Project",projectDescription:`
      <p>Developed a mobile application for a shopping center, responsible for the user interface, core functionalities, and database integrations. Technologies used included React Native, JavaScript, REST APIs, and an SQL database. The project involved testing and teamwork.</p>
    `,projectOpenImages:"(Click to view the images)."}},d="/Resume/assets/screenshot1-BvL2_g7i.png",m="/Resume/assets/screenshot2-x7jdv3mA.png",g="/Resume/assets/screenshot3-Bu_whLIu.png",k="/Resume/assets/screenshot4-D8TNl9wL.png";let s="fi";const t={contact:document.getElementById("contact"),educationTitle:document.getElementById("educationTitle"),education:document.getElementById("education"),experienceTitle:document.getElementById("experienceTitle"),experience:document.getElementById("experience"),skillsTitle:document.getElementById("skillsTitle"),skills:document.getElementById("skills"),languagesTitle:document.getElementById("languagesTitle"),languages:document.getElementById("languages"),button:document.getElementById("langBtn"),projectTitle:document.getElementById("projectTitle"),projectDescription:document.getElementById("projectDescription"),projectImagesNote:document.getElementById("projectImagesNote"),projectScreenshots:document.getElementById("projectScreenshots"),modal:document.getElementById("imageModal"),modalImg:document.getElementById("modalImage"),modalClose:document.getElementById("modalClose")},h=[{src:d,alt:"Project Screenshot 1"},{src:m,alt:"Project Screenshot 2"},{src:g,alt:"Project Screenshot 3"},{src:k,alt:"Project Screenshot 4"}];function y(){t.projectScreenshots.innerHTML=h.map(e=>`
        <img 
          src="${e.src}" 
          alt="${e.alt}" 
          class="screenshot-thumb"
          loading="lazy"
        />
      `).join("")}function r(){const e=u[s];t.contact.innerHTML=e.contact,t.educationTitle.textContent=e.educationTitle,t.education.innerHTML=e.education,t.experienceTitle.textContent=e.experienceTitle,t.experience.innerHTML=e.experience,t.skillsTitle.textContent=e.skillsTitle,t.skills.innerHTML=e.skills,t.languagesTitle.textContent=e.languagesTitle,t.languages.innerHTML=e.languages,t.button.textContent=e.button,t.projectTitle.textContent=e.projectTitle,t.projectDescription.innerHTML=e.projectDescription,t.projectImagesNote.textContent=e.projectOpenImages}t.button.addEventListener("click",()=>{s=s==="fi"?"en":"fi",r()});document.addEventListener("click",e=>{e.target.classList.contains("screenshot-thumb")&&(t.modalImg.src=e.target.src,t.modal.classList.remove("hidden")),(e.target===t.modal||e.target===t.modalClose)&&p()});document.addEventListener("keydown",e=>{e.key==="Escape"&&p()});function p(){t.modal.classList.add("hidden"),t.modalImg.src=""}r();y();
