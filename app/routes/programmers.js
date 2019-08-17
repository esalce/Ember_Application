import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        return ['Dannis Ritchie', 'Linus Torvalds','Donald Knuth','Ken Thompson','Tims Berners-Lee'];
    }
});