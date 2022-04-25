# let-it-snow

> A JS exercise use at HEPL for MMI.

* * *

**let-it-snow** is an educational project, which will be used for `JS` courses.

**Note:** the school where the course is given, the [HEPL](https://hepl.be) from Liège, Belgium, is a French-speaking school. From this point, the instruction will be in French. Sorry.

* * *

Vous pouvez consulter une version finale du projet [ici](https://hepl-mmi.github.io/let-it-snow/).

Dans le cadre de cet exercice, on vous demande de reproduire une neige qui tombe.


1. Mettez à jour les dimensions du canvas, dynamiquement à partir des dimensions de la fenêtre du navigateur.
2. Remplissez le canvas avec un dégradé linéaire à partir des valeurs contenues dans le fichier `settings.ts`.![readme1](img/readme1.gif)
3. Dessinez un cercle avec un dégradé blanc circulaire. Animez sa position, afin qu'il tombe vers le bas. Une fois arrivé en bas, il y reste. Dans un premier temps, vous pouvez vous limiter à des cercles blancs. Notez que les flocons les plus légers tombent plus lentement. La vitesse verticale fait donc intervenir le rayon du cercle. Concrètement, on se sert du rayon pour déterminer un ratio pour générer une vitesse verticale comprise entre le minimum et le maximum, défini dans le fichier de réglages. ![readme2](img/readme2.gif)
4. Dans la boucle d'animation, produisez une fois sur 2 un nouveau flocon de neige. L'autre fois, retirez un flocon de neige, parmi ceux au sol uniquement. ![readme3](img/readme3.gif)
5. Déterminer la direction horizontale du mouvement de la souris. Faites en sorte que le déplacement en `x` soit impacté. Autrement dit si on déplace la souris vers la droite alors les flocons tombent vers la droite. L’inverse étant aussi possible.![readme4](img/readme4.gif)
