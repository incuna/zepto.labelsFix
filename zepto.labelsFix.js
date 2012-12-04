(function ($) {
    // this plugin ensures the labels will highlight the correct input when touched
    // this problem only affects iOS Safari
    // says more here: http://www.thewatchmakerproject.com/blog/how-to-fix-the-broken-ipad-form-label-click-issue/ 
    $.fn.labelsFix = function() {
        return this.each(function(){
            $(this).find('label[for]').click(function () {
                var el = $(this).attr('for');
                if ($('#' + el + '[type=radio], #' + el + '[type=checkbox]').attr('selected', !$('#' + el).attr('selected'))) {
                    return;
                } else {
                    $('#' + el)[0].focus();
                }
            });
        });
    }
})(Zepto);
