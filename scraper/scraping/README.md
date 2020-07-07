
# recipeScrap.py
 

 **- `run_scapper(num_of_recipies=10)`**
		return a dict of dicts with recipes features, the amount of recipes is equals to num_of_recipies
		the keys of the dict are: 
	
 - [key] : int from one to  num_of_recipies
		 - ["name"] : String
		 
		 - ["servings"] : string  like  "4.00"
		 
		 - ["time"] : string   "45min"
		 
		 - ["ingredients"] : List of strings like   [ "1 pollo " , "2 quesos  " , " 1 cucharada de sal"]
		 
		 - ["instructions"] : List of strings  with the steps in order like   [ "first step" , "second step" , " third step"]
		 
		 - ["url_img"] : A String  with URL  to get the main image of recipe
		 
		 - ["description"] :String 
		 
		 - ["price"] :  String  a random value from 1.5 to 20 dollars  like "15.22"
		 
		 - ["category"] : A  String value in the categories: "Pastas", "Sopas y Cremas", "Granos", "Vegetariana", "Carnes" and "Postres"
		 
		 - ["url_ingredient"] :  A String  with URL  to get the image of ingedients
