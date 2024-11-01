<<<<<<< .mine
tinymce.PluginManager.add('bannerplugin', function(editor, url){
   
   editor.addButton('bannerlistbox',{
         type: 'listbox',
         text: 'WPBanner',
         icon: false,
         context: 'tools',
         onselect: function(e){
             
            editor.insertContent(this.value())
            ed = tinymce.activeEditor.settings.banner_listbox;
             console.log(ed);
         },
          values: getValues(),

   })
 
   function getValues()
   {
      var values = [];
      var lb = tinymce.activeEditor.settings.banner_listbox;
      
     for (i=0; i < lb.length; i++)
     {
        values[i] = {};
        values[i].text = lb[i]['banner_clientname'] ;
        values[i].value = '[wpbanner client="' + lb[i]['banner_clientname'] + '"]';
     }
    return values;
   }

});
=======
tinymce.create('tinymce.plugins.BannerPlugin', {
 
createControl:function(n, cm) {
                  switch (n) {
                     case 'bannerlistbox':
                     var mlb = cm.createListBox('bannerlistbox', {
                        title : 'WPBanner',
                        onselect : function(v) {
                           //tinyMCE.activeEditor.windowManager.alert('Value selected:' + v);
                           tinyMCE.activeEditor.selection.setContent( v);
                        }
                     });

                // Add some values to the list box
//                      alert(tinyMCE.activeEditor.settings.banner_listbox[0]['title'])
                ed = tinyMCE.activeEditor.settings;
               for (i=0; i < ed.banner_listbox.length; i++ )
               {
                  mlb.add(ed.banner_listbox[i]['banner_clientname'],'[wpbanner client="'+ed.banner_listbox[i]['banner_clientname']+'"]');
               }
              
                // Return the new listbox instance
                return mlb;
               }

              return null;
            }
});

tinymce.PluginManager.add('bannerplugin', tinymce.plugins.BannerPlugin);
>>>>>>> .r912073
