import eventFoodData from '../../helpers/data/eventFoodData';
import smashData from '../../helpers/data/smash';

import utils from '../../helpers/utils';

import './eventSingleView.scss';
import '../../../styles/main.scss';

const closeSingleEvent = () => {
  utils.printToDom('single-view-event', '');
  $('#foodCards').removeClass('hide');
  $('#souvenirs').removeClass('hide');
  $('#staff-collection').removeClass('hide');
  $('#shows').removeClass('hide');
  $('#events').removeClass('hide');
  $('#single-view-event').addClass('hide');
};

const eventFoodDetails = (singleEvent) => {
  let domString = '';
  console.log('single event data used for food details', singleEvent);
  domString += '<table class="table-responsive table-dark">';
  domString += '<thead>';
  domString += '<tr>';
  domString += '<th scope="col">Food Type</th>';
  domString += '<th scope="col">Price</th>';
  domString += '<th scope="col">Qty</th>';
  domString += '</tr>';
  domString += '</thead>';
  domString += '<tbody>';
  singleEvent.food.forEach((foodItem) => {
    domString += `<tr class="eventFoodItem foodRow" data-id="${foodItem.id}" data-parent="${foodItem.parentEventFoodId}" data-container="${foodItem.parentEventId}">`;
    domString += `<th scope="row">${foodItem.type}</th>`;
    domString += `<td>$${foodItem.price}</td>`;
    domString += `<td>${foodItem.quantity}</td>`;
    domString += '<td><button id="deleteEventFoodBtn" class="btn btn-default deleteEventBtn deleteEventFoodBtn"><i class="far fa-trash-alt"></i></button></td>';
    domString += '</tr>';
  });
  domString += '</tbody>';
  domString += '</table>';

  return domString;
};

const eventSouvenirDetails = (singleEvent) => {
  let domString = '';
  domString += '<table class="table-responsive table-dark">';
  domString += '<thead>';
  domString += '<tr>';
  domString += '<th scope="col">Souvenir Type</th>';
  domString += '<th scope="col">Price</th>';
  domString += '<th scope="col">Qty</th>';
  domString += '</tr>';
  domString += '</thead>';
  domString += '<tbody>';
  singleEvent.souvenirs.forEach((souvItem) => {
    domString += '<tr>';
    domString += `<th scope="row">${souvItem.type}</th>`;
    domString += `<td>$${souvItem.price}</td>`;
    domString += `<td>${souvItem.isAvailable}</td>`;
    domString += '<td><button id="deleteEventFoodBtn" class="btn btn-default deleteEventBtn"><i class="far fa-trash-alt"></i></button></td>';
    domString += '</tr>';
  });
  domString += '</tbody>';
  domString += '</table>';

  return domString;
};


const eventShowDetails = (singleEvent) => {
  let domString = '';
  domString += '<table class="table-responsive table-dark">';
  domString += '<thead>';
  domString += '<tr>';
  domString += '<th scope="col">Show Name</th>';
  domString += '<th scope="col">Cost</th>';
  domString += '<th scope="col">Qty</th>';
  domString += '</tr>';
  domString += '</thead>';
  domString += '<tbody>';
  singleEvent.shows.forEach((showItem) => {
    domString += `<tr class="eventShowItem" data-id="${showItem.id}">`;
    console.error('showItem', showItem);
    domString += '<tr>';
    domString += `<th scope="row">${showItem.name}</th>`;
    domString += `<td>$${showItem.cost}</td>`;
    domString += `<td>${showItem.quantity}</td>`;
    domString += '<td><button id="deleteEventShowBtn" class="btn btn-default deleteEventBtn"><i class="far fa-trash-alt"></i></button></td>';
    domString += '</tr>';
  });
  domString += '</tbody>';
  domString += '</table>';

  return domString;
};

const eventStaffDetails = (singleEvent) => {
  let domString = '';
  domString += '<table class="table-responsive table-dark">';
  domString += '<thead>';
  domString += '<tr>';
  domString += '<th scope="col">Staff Member</th>';
  domString += '<th scope="col">Wage</th>';
  domString += '<th scope="col">Character</th>';
  domString += '</tr>';
  domString += '</thead>';
  domString += '<tbody>';
  singleEvent.staff.forEach((staffMember) => {
    domString += '<tr>';
    domString += `<th scope="row">${staffMember.name}</th>`;
    domString += `<td>$${staffMember.pay}/hr.</td>`;
    domString += `<td>${staffMember.characterType}</td>`;
    domString += '<td><button id="deleteEventFoodBtn" class="btn btn-default deleteEventBtn"><i class="far fa-trash-alt"></i></button></td>';
    domString += '</tr>';
  });
  domString += '</tbody>';
  domString += '</table>';

  return domString;
};

const removeEventFood = () => {
  const eventFoodId = $('.foodRow').data('parent');
  const eventId = $('.foodRow').data('container');
  console.log('XXXXXXXXXevent food id that we need to delete', eventFoodId);
  console.log('YYYYYYYYevent id that needs to refresh', eventId);
  eventFoodData.getSingleEventFood()
    .then(() => {
      eventFoodData.deleteEventFood(eventFoodId)
        .then(() => {
          console.log('deleted event food', eventFoodId);
          // eslint-disable-next-line no-use-before-define
          viewSingleEvent(eventId);
        });
    })
    .catch((error) => console.error('could not delete food item from event', error));
};

const viewSingleEvent = (eventId) => {
  smashData.getCompleteEvent(eventId)
    .then((singleEvent) => {
      let domString = '';
      domString += '<div class="singleEventTitle">';
      domString += `<h2>${singleEvent.name}</h2>`;
      domString += `<h5>${singleEvent.location}</h5>`;
      domString += `<h5>${singleEvent.date}</h5>`;
      domString += `<h5>${singleEvent.timeStart} - ${singleEvent.timeEnd}</h5>`;
      domString += '<button id="closeSingleEvent" class="btn btn-lg closeEventBtn"><i class="fas fa-times"></i> Close event details</button>';
      domString += '</div>';
      domString += '<div id="eventDetails" class="container-fluid d-flex flex-wrap">';
      domString += '<div id="eventFoodSection" class="quad col-md-4 col-sm-12">';
      domString += '<h4 class="eventSectionTitle">Food Details</h4>';
      domString += eventFoodDetails(singleEvent);
      domString += '</div>';
      domString += '<div id="eventSouvenirsSection" class="quad">';
      domString += '<h4 class="eventSectionTitle">Souvenirs Details</h4>';
      domString += eventSouvenirDetails(singleEvent);
      domString += '</div>';
      domString += '<div id="eventStaffSection" class="quad">';
      domString += '<h4 class="eventSectionTitle">Staff Details</h4>';
      domString += eventStaffDetails(singleEvent);
      domString += '</div>';
      domString += '<div id="eventShowsSection" class="quad">';
      domString += '<h4 class="eventSectionTitle">Shows Details</h4>';
      domString += eventShowDetails(singleEvent);
      domString += '</div>';
      domString += '</div>';
      utils.printToDom('single-view-event', domString);
      $('body').on('click', '#closeSingleEvent', closeSingleEvent);
      $('body').on('click', '.deleteEventFoodBtn', removeEventFood);
      $('#foodCards').addClass('hide');
      $('#souvenirs').addClass('hide');
      $('#staff-collection').addClass('hide');
      $('#shows').addClass('hide');
      $('#events').addClass('hide');
      $('#single-view-event').removeClass('hide');
    })
    .catch((error) => console.error('problem with single event', error));
};

const viewSingleEventCall = (e) => {
  const eventId = e.target.dataset.id;
  viewSingleEvent(eventId);
};

export default { viewSingleEventCall };
