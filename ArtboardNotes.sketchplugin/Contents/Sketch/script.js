var go = function(context) {
  try { ArtboardNotes.go(context); }
  catch(e) {
      if(Mocha.sharedRuntime().loadFrameworkWithName_inDirectory('ArtboardNotes', NSBundle.bundleWithURL(context.plugin.url()).resourceURL().path())) {
          ArtboardNotes.go(context);
      }
  }
}