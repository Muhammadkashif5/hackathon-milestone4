document.addEventListener('DOMContentLoaded', () => {
    const downloadBtn = document.getElementById('downloadBtn') as HTMLButtonElement;
    const editResume = document.getElementById('editResume') as HTMLButtonElement;

    const name = localStorage.getItem('resumeName');
    const title = localStorage.getItem('resumeTitle');
    const summary = localStorage.getItem('resumeSummary');
    const experiences = JSON.parse(localStorage.getItem('resumeExperiences') || '[]');
    const skills = localStorage.getItem('resumeSkills');
    const language = localStorage.getItem('resumeLanguage');
    const contact = localStorage.getItem('resumeContact');
    const email = localStorage.getItem('resumeEmail');

      document.getElementById("name")!.innerText = name ?? ""
      document.getElementById("title")!.innerText = title ?? ""
      document.getElementById("contact")!.innerText = `📞 ${contact ?? ""}`
      document.getElementById("email")!.innerText = `🌐 ${email ?? ""}`

      const skillUL = document.getElementById("skills")!
      skills?.split(",").forEach((item) => {
        const ele = document.createElement("li")
        ele.innerText = item
        skillUL.appendChild(ele)
      })
      const languageUL = document.getElementById("languages")!
      language?.split(",").forEach((item) => {
        const ele = document.createElement("li")
        ele.innerText = item
        languageUL.appendChild(ele)
      })
      document.getElementById("summary")!.innerText = summary ?? ""
      const experienceList = document.getElementById("experience")!
      experiences.forEach((item: any) => {

        const h3 = document.createElement("h3")
        h3.innerText = item.title
        experienceList.appendChild(h3)

        const para = document.createElement("p")
        para.innerHTML = `${item.location}<br />${item.startDate} - ${item.endDate}`; 
        experienceList.appendChild(para)

        const ulElement = document.createElement('ul');
        ulElement.style.listStyleType = 'disc';

        item.description?.split(",").forEach((item: any) => {
          const ele = document.createElement("li")
          ele.innerText = item
          ulElement.appendChild(ele)
        })
        experienceList.appendChild(ulElement)
      })
        


    // Add event listener for the download button
    downloadBtn?.addEventListener('click', () => {
      const resumeContent = document.getElementById('resumeContent');
      
      if (resumeContent) {
        const options = {
          margin: [0, 0, 0, 0],
          filename: 'resume.pdf',
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { scale: 2 },
          jsPDF: { unit: 'pt', format: 'a4', orientation: 'portrait' }
        };
  
        (window as any).html2pdf().from(resumeContent).set(options).save();
      }
    });

    editResume?.addEventListener('click', () => {
        window.location.href = '/?isEdit=true';
    });
  });
  