'use strict'

module.exports = {
    stardateMethods(){
        return{
            calculaDateByStardate: function(stardate){
                var base = new Date('2265-04-25 00:00:00');
                var baseMilissigundos = base.getTime()
                var divisaoDias = stardate/7.21;
                var dias = Math.floor(divisaoDias);
                var diasMilissegundos = 1000*60*60*24*dias;
                var Datafinal = new Date(baseMilissigundos+diasMilissegundos);
                return Datafinal;
            }
        }
    }
}