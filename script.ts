let experienceCount = 1;

// Function to add a new experience block with the four fields
document.getElementById('addExperienceBtn')!.addEventListener('click', () => {
  const experienceContainer = document.getElementById('experienceContainer')!;

  const experienceDiv = document.createElement('div');

  // Experience Title
  const titleLabel = document.createElement('label');
  titleLabel.setAttribute('for', `experienceTitle-${experienceCount}`);
  titleLabel.innerText = 'Designation:';
  const titleInput = document.createElement('input');
  titleInput.type = 'text';
  titleInput.id = `experienceTitle-${experienceCount}`;
  titleInput.name = 'experienceTitle';
  titleInput.required = true;

  // Location
  const locationLabel = document.createElement('label');
  locationLabel.setAttribute('for', `experienceLocation-${experienceCount}`);
  locationLabel.innerText = 'Firm Name:';
  const locationInput = document.createElement('input');
  locationInput.type = 'text';
  locationInput.id = `experienceLocation-${experienceCount}`;
  locationInput.name = 'experienceLocation';
  locationInput.required = true;

  // Start Date
  const startDateLabel = document.createElement('label');
  startDateLabel.setAttribute('for', `experienceStartDate-${experienceCount}`);
  startDateLabel.innerText = 'Start Date:';
  const startDateInput = document.createElement('input');
  startDateInput.type = 'date';
  startDateInput.id = `experienceStartDate-${experienceCount}`;
  startDateInput.name = 'experienceStartDate';
  startDateInput.required = true;

  // End Date
  const endDateLabel = document.createElement('label');
  endDateLabel.setAttribute('for', `experienceEndDate-${experienceCount}`);
  endDateLabel.innerText = 'End Date:';
  const endDateInput = document.createElement('input');
  endDateInput.type = 'date';
  endDateInput.id = `experienceEndDate-${experienceCount}`;
  endDateInput.name = 'experienceEndDate';
  endDateInput.required = true;

  // Description
  const descriptionLabel = document.createElement('label');
  descriptionLabel.setAttribute('for', `experienceDescription-${experienceCount}`);
  descriptionLabel.innerText = 'Description:';
  const descriptionTextarea = document.createElement('textarea');
  descriptionTextarea.id = `experienceDescription-${experienceCount}`;
  descriptionTextarea.name = 'experienceDescription';
  descriptionTextarea.rows = 4;
  descriptionTextarea.required = true;

  // Append all fields to the experienceDiv
  experienceDiv.appendChild(titleLabel);
  experienceDiv.appendChild(titleInput);
  experienceDiv.appendChild(locationLabel);
  experienceDiv.appendChild(locationInput);
  experienceDiv.appendChild(startDateLabel);
  experienceDiv.appendChild(startDateInput);
  experienceDiv.appendChild(endDateLabel);
  experienceDiv.appendChild(endDateInput);
  experienceDiv.appendChild(descriptionLabel);
  experienceDiv.appendChild(descriptionTextarea);

  // Append the experienceDiv to the container
  experienceContainer.appendChild(experienceDiv);

  experienceCount++;
});

// Save form data to localStorage
document.getElementById('resumeForm')!.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = (document.getElementById('name') as HTMLInputElement).value;
  const title = (document.getElementById('title') as HTMLInputElement).value;
  const summary = (document.getElementById('summary') as HTMLTextAreaElement).value;

  // Collect experiences
  const experiences: Array<{ title: string, location: string, startDate: string, endDate: string, description: string }> = [];

  for (let i = 0; i < experienceCount; i++) {
    const experienceTitle = (document.getElementById(`experienceTitle-${i}`) as HTMLInputElement).value;
    const experienceLocation = (document.getElementById(`experienceLocation-${i}`) as HTMLInputElement).value;
    const experienceStartDate = (document.getElementById(`experienceStartDate-${i}`) as HTMLInputElement).value;
    const experienceEndDate = (document.getElementById(`experienceEndDate-${i}`) as HTMLInputElement).value;
    const experienceDescription = (document.getElementById(`experienceDescription-${i}`) as HTMLTextAreaElement).value;

    experiences.push({
      title: experienceTitle,
      location: experienceLocation,
      startDate: experienceStartDate,
      endDate: experienceEndDate,
      description: experienceDescription
    });
  }

  const skills = (document.getElementById('skills') as HTMLInputElement).value;
  const language = (document.getElementById('language') as HTMLInputElement).value;
  const contact = (document.getElementById('contact') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;

  // Store data in localStorage
  localStorage.setItem('resumeName', name);
  localStorage.setItem('resumeTitle', title);
  localStorage.setItem('resumeSummary', summary);
  localStorage.setItem('resumeExperiences', JSON.stringify(experiences));
  localStorage.setItem('resumeSkills', skills);
  localStorage.setItem('resumeLanguage', language);
  localStorage.setItem('resumeContact', contact);
  localStorage.setItem('resumeEmail', email);

  window.location.href = 'resume.html';
});

window.addEventListener('DOMContentLoaded', () => {

  const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const editParam = urlParams.get('isEdit')
console.log("edit", editParam)

if(editParam) {


  const name = localStorage.getItem('resumeName');
  const title = localStorage.getItem('resumeTitle');
  const summary = localStorage.getItem('resumeSummary');
  const experiences = JSON.parse(localStorage.getItem('resumeExperiences') || '[]');
  const skills = localStorage.getItem('resumeSkills');
  const language = localStorage.getItem('resumeLanguage');
  const contact = localStorage.getItem('resumeContact');
  const email = localStorage.getItem('resumeEmail');

  if (name) (document.getElementById('name') as HTMLInputElement).value = name;
  if (title) (document.getElementById('title') as HTMLInputElement).value = title;
  if (summary) (document.getElementById('summary') as HTMLTextAreaElement).value = summary;

  experiences.forEach((experience: any, index: number) => {
    if (index === 0) {
      (document.getElementById(`experienceTitle-0`) as HTMLInputElement).value = experience.title;
      (document.getElementById(`experienceLocation-0`) as HTMLInputElement).value = experience.location;
      (document.getElementById(`experienceStartDate-0`) as HTMLInputElement).value = experience.startDate;
      (document.getElementById(`experienceEndDate-0`) as HTMLInputElement).value = experience.endDate;
      (document.getElementById(`experienceDescription-0`) as HTMLTextAreaElement).value = experience.description;
    } else {
      const experienceContainer = document.getElementById('experienceContainer')!;
      const experienceDiv = document.createElement('div');

      // Repeat the process to create each new experience block
      // with title, location, start date, end date, and description fields

      const titleLabel = document.createElement('label');
      titleLabel.setAttribute('for', `experienceTitle-${index}`);
      titleLabel.innerText = 'Designation:';
      const titleInput = document.createElement('input');
      titleInput.type = 'text';
      titleInput.id = `experienceTitle-${index}`;
      titleInput.name = 'experienceTitle';
      titleInput.value = experience.title;
      titleInput.required = true;

      const locationLabel = document.createElement('label');
      locationLabel.setAttribute('for', `experienceLocation-${index}`);
      locationLabel.innerText = 'Firm Name:';
      const locationInput = document.createElement('input');
      locationInput.type = 'text';
      locationInput.id = `experienceLocation-${index}`;
      locationInput.name = 'experienceLocation';
      locationInput.value = experience.location;
      locationInput.required = true;

      const startDateLabel = document.createElement('label');
      startDateLabel.setAttribute('for', `experienceStartDate-${index}`);
      startDateLabel.innerText = 'Start Date:';
      const startDateInput = document.createElement('input');
      startDateInput.type = 'date';
      startDateInput.id = `experienceStartDate-${index}`;
      startDateInput.name = 'experienceStartDate';
      startDateInput.value = experience.startDate;
      startDateInput.required = true;

      const endDateLabel = document.createElement('label');
      endDateLabel.setAttribute('for', `experienceEndDate-${index}`);
      endDateLabel.innerText = 'End Date:';
      const endDateInput = document.createElement('input');
      endDateInput.type = 'date';
      endDateInput.id = `experienceEndDate-${index}`;
      endDateInput.name = 'experienceEndDate';
      endDateInput.value = experience.endDate;
      endDateInput.required = true;

      const descriptionLabel = document.createElement('label');
      descriptionLabel.setAttribute('for', `experienceDescription-${index}`);
      descriptionLabel.innerText = 'Description:';
      const descriptionTextarea = document.createElement('textarea');
      descriptionTextarea.id = `experienceDescription-${index}`;
      descriptionTextarea.name = 'experienceDescription';
      descriptionTextarea.rows = 4;
      descriptionTextarea.value = experience.description;
      descriptionTextarea.required = true;

      // Append all fields to experienceDiv
      experienceDiv.appendChild(titleLabel);
      experienceDiv.appendChild(titleInput);
      experienceDiv.appendChild(locationLabel);
      experienceDiv.appendChild(locationInput);
      experienceDiv.appendChild(startDateLabel);
      experienceDiv.appendChild(startDateInput);
      experienceDiv.appendChild(endDateLabel);
      experienceDiv.appendChild(endDateInput);
      experienceDiv.appendChild(descriptionLabel);
      experienceDiv.appendChild(descriptionTextarea);

      // Append the experienceDiv to the container
      experienceContainer.appendChild(experienceDiv);
      experienceCount++;
    }
  });

  if (skills) (document.getElementById('skills') as HTMLInputElement).value = skills;
  if (language) (document.getElementById('language') as HTMLInputElement).value = language;
  if (contact) (document.getElementById('contact') as HTMLInputElement).value = contact;
  if (email) (document.getElementById('email') as HTMLInputElement).value = email;
}
});
