function valeur_max(tableau){
            var max=0;
        for (i=0;i<tableau.length;i++) 
        {
            
            if(tableau[i]>max) max=tableau[i];
        }

        return max;
    }
    
    tableau = [58, 9, -8];

    max=valeur_max(tableau);

    console.log("La valeur maximal est : " +max);