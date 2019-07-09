var ghpages = require('gh-pages');

ghpages.publish('dist', {
    message: 'Auto-generated commit'
}, function(err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('successed auto commit');
});