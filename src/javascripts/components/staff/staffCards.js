import './staffCards.scss';

const buildStaffCards = (staff) => {
  let domString = '';
  domString += '<div class="col-4 mb-2">';
  domString += `<div class="card" id="${staff.id}">`;
  domString += `<img src="${staff.imageUrl}" class="card-img-top img-fluid staff-image" alt="Photo of ${staff.name}">`;
  domString += '<div class="card-body">';
  domString += `<h5 class="card-title">${staff.name}</h5>`;
  domString += `<p class="card-text">Character Type: ${staff.characterType}</p>`;
  domString += `<p class="card-text">Character Name: ${staff.characterName}</p>`;
  domString += `<p class="card-text">Location: ${staff.location}</p>`;
  domString += '<button id="editStaffBtn" class="col-5 btn btn-default editStaffBtn"><i class="fas fa-feather-alt"></i> Edit</<button>';
  domString += '<button class="btn btn-lg delete-staff-btn" id="deleteStaffBtn"><i class="far fa-trash-alt"></i> Delete</button>';
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';
  return domString;
};

export default { buildStaffCards };
