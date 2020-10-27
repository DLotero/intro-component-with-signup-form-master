$( document ).ready(function() {
    $('[type="submit"]').on('click', function (e) {
    // this adds 'required' class to all the required inputs under the same <form> as the submit button
      e.preventDefault();
    $(this)
        .closest('form')
        .find('[required]')
        .addClass('invalid');
});
});