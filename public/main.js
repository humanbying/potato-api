
$(() => {
  renderAllPotatoes();
  $('#submitOrder').submit(potatoEntered());
});


function potatoEntered(){
  

}







function renderAllPotatoes() {
  $.get('/potatoes')
    .done(potatoes => {

      let $lis = potatoes.map(potato => {
        let $li = $('#template').clone();
        $li.removeAttr('id');
        $li.find('.style').text(potato.style);
        $li.find('.quantity').text(potato.quantity);
        return $li;
      });

      $('.list').append($lis);

    })
    .fail(err => {
      console.log('err:', err);
    })
}
