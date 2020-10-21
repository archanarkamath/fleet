window.onload = function() {
    if (window.jQuery) {  
        jQuery('#footer_about_id').unwrap(); 
        jQuery('#footer_about_id').unwrap(); 
        jQuery('#block-getintouch').addClass('col-lg-3 col-md-12');  
		jQuery('#address').unwrap(); 
		jQuery('#contact-form').unwrap(); 
		jQuery('#enquiry-img').unwrap(); 
		jQuery('#enquiry-form').unwrap();
    } else {
        // jQuery is not loaded
        alert("Doesn't Work");
    }
}