document.addEventListener('DOMContentLoaded', function () {
    var downloadBtn = document.getElementById('downloadBtn');
    var editResume = document.getElementById('editResume');
    var name = localStorage.getItem('resumeName');
    var title = localStorage.getItem('resumeTitle');
    var summary = localStorage.getItem('resumeSummary');
    var experiences = JSON.parse(localStorage.getItem('resumeExperiences') || '[]');
    var skills = localStorage.getItem('resumeSkills');
    var language = localStorage.getItem('resumeLanguage');
    var contact = localStorage.getItem('resumeContact');
    var email = localStorage.getItem('resumeEmail');
    document.getElementById("name").innerText = name !== null && name !== void 0 ? name : "";
    document.getElementById("title").innerText = title !== null && title !== void 0 ? title : "";
    document.getElementById("contact").innerText = "\uD83D\uDCDE ".concat(contact !== null && contact !== void 0 ? contact : "");
    document.getElementById("email").innerText = "\uD83C\uDF10 ".concat(email !== null && email !== void 0 ? email : "");
    var skillUL = document.getElementById("skills");
    skills === null || skills === void 0 ? void 0 : skills.split(",").forEach(function (item) {
        var ele = document.createElement("li");
        ele.innerText = item;
        skillUL.appendChild(ele);
    });
    var languageUL = document.getElementById("languages");
    language === null || language === void 0 ? void 0 : language.split(",").forEach(function (item) {
        var ele = document.createElement("li");
        ele.innerText = item;
        languageUL.appendChild(ele);
    });
    document.getElementById("summary").innerText = summary !== null && summary !== void 0 ? summary : "";
    var experienceList = document.getElementById("experience");
    experiences.forEach(function (item) {
        var _a;
        var h3 = document.createElement("h3");
        h3.innerText = item.title;
        experienceList.appendChild(h3);
        var para = document.createElement("p");
        para.innerHTML = "".concat(item.location, "<br />").concat(item.startDate, " - ").concat(item.endDate);
        experienceList.appendChild(para);
        var ulElement = document.createElement('ul');
        ulElement.style.listStyleType = 'disc';
        (_a = item.description) === null || _a === void 0 ? void 0 : _a.split(",").forEach(function (item) {
            var ele = document.createElement("li");
            ele.innerText = item;
            ulElement.appendChild(ele);
        });
        experienceList.appendChild(ulElement);
    });
    // Add event listener for the download button
    downloadBtn === null || downloadBtn === void 0 ? void 0 : downloadBtn.addEventListener('click', function () {
        var resumeContent = document.getElementById('resumeContent');
        if (resumeContent) {
            var options = {
                margin: [0, 0, 0, 0],
                filename: 'resume.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'pt', format: 'a4', orientation: 'portrait' }
            };
            window.html2pdf().from(resumeContent).set(options).save();
        }
    });
    editResume === null || editResume === void 0 ? void 0 : editResume.addEventListener('click', function () {
        window.location.href = '/?isEdit=true';
    });
});
