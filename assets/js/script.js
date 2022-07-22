                // select_location
                $(".selectpicker.select_location").change(function() {
                    selected = $(this).children("option:selected").val();
                    if (selected != null) {
                        $('.carousel').hide();
                        $(".overlay").fadeIn();
                        window.location.replace(selected);
                    } else {
                        $(".select__item").hide();
                    }
                });