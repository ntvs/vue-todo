# "Anime/Favorites list" / TODO test app
## Implemented using Vue.js 3

**Features:**
- Add title, picture
- Remove elements
- Favorite elements
- Collapsable categories
- CSS

**Problems:**
1. No form sanitation
2. Import { ref } from vue VS. direct editing with v-model
3. Categories hard coded

**Resolved**
1. Deleting anime through favorites array does not delete the corresponding anime in the anime array
    - This happened because the position of the object in the favorites array was not the same as the position of the object in the original animes array.
        - An incorrect solution to this was committed by adding an attribute which listed each anime's original index in the animes array. This was an incorrect solution because if an object before it in the array was deleted, the indices of each object after the deleted object would change and the index stored in the index attribute of each object in the animes array would be incorrect. So, using the index stored in each object as an attribute to delete objects resulted in the incorrect object being deleted once again or nothing being deleted at all since no object would be at the specified index.
    - This was resolved by passing in the object's unique ID into the deletion method. Then, using the Array.prototype.findIndex() method to iterate through the objects of the original animes array, the index of the object which had an ID strictly equal to the ID passed into the deletion method could be found. Now, whatever the position and whatever the array, a deletion by ID could be performed.