import utils from '../../helpers/utils';

const saveNewFoodItem = () => {
  console.error('submit button is in fact working!');
};

const newFoodForm = () => {
  console.error('new food form button working');
  let domString = '';
  domString += '<form>';
  domString += '<div class="form-group">';
  domString += '<label for="exampleInputType">Type of Food</label>';
  domString += '<input type="type" class="form-control" id="exampleInputType" aria-describedby="emailHelp" placeholder="Type">';
  domString += '</div>';
  domString += '<div class="form-group">';
  domString += '<label for="exampleInputDescription1">Description of Food</label>';
  domString += '<input type="description" class="form-control" id="exampleInputDescription1" placeholder="Description">';
  domString += '</div>';
  domString += '<div class="form-group">';
  domString += '<label for="exampleInputImageUrl1">Image Url of Food</label>';
  domString += '<input type="imageUrl" class="form-control" id="exampleInputImageUrl1" placeholder="image Url">';
  domString += '</div>';
  domString += '<div class="form-group">';
  domString += '<label for="exampleInputPrice1">Price of Food</label>';
  domString += '<input type="price" class="form-control" id="exampleInputPrice1" placeholder="image Url">';
  domString += '</div>';
  domString += '<h6>Locations Of Food:</h6>';
  domString += '<div class="form-check">';
  domString += '<input type="checkbox" class="form-check-input" id="exampleCheck1">';
  domString += '<label class="form-check-label" for="exampleCheck1">Edinson Tudor Festival</label>';
  domString += '</div>';
  domString += '<div class="form-check">';
  domString += '<input type="checkbox" class="form-check-input" id="exampleCheck1">';
  domString += '<label class="form-check-label" for="exampleCheck1">Hopscote-by-Sea Faire</label>';
  domString += '</div>';
  domString += '<div class="form-check">';
  domString += '<input type="checkbox" class="form-check-input" id="exampleCheck1">';
  domString += '<label class="form-check-label" for="exampleCheck1">North Illinois Pleasure Faire</label>';
  domString += '</div>';
  domString += '<h6>Is food avaliable?</h6>';
  domString += '<div class="form-check">';
  domString += '<input type="checkbox" class="form-check-input" id="exampleCheck1">';
  domString += '<label class="form-check-label" for="exampleCheck1">Yes</label>';
  domString += '</div>';
  domString += '<div class="form-check">';
  domString += '<input type="checkbox" class="form-check-input" id="exampleCheck1">';
  domString += '<label class="form-check-label" for="exampleCheck1">No</label>';
  domString += '</div>';
  domString += '<button id="newFoodSubmit" class="btn btn-primary">Submit</button>';
  domString += '</form>';
  utils.printToDom('add-new-food-modal', domString);
  $('body').on('click', '#newFoodSubmit', saveNewFoodItem);
};

export default { newFoodForm };
