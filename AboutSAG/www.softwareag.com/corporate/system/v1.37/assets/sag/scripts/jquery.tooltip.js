//initialize tooltip
               $(document).on("click", ".tooltip", function() { 
                  $(this).tooltip(
                      { 
                          items: ".tooltip", 
                          content: function(){
                              return $(this).data('description'); 
                          }, 
                          close: function( event, ui ) {
                              var me = this;
                              ui.tooltip.hover(
                                  function () {
                                      $(this).stop(true).fadeTo(400, 1); 
                                  },
                                  function () {
                                      $(this).fadeOut("400", function(){
                                          $(this).remove();
                                      });
                                  }
                              );
                              ui.tooltip.on("click", function(){
                                  $(me).tooltip("destroy");
                              });
                        },
                      }
                  );
                  $(this).tooltip("open");
              });