# Korrila React Receipts

* Korilla is a Korean barbecue taco truck that makes thousands of hungry customers happy every year.

*Their CEO is thinking of updating their short order tracking system using React.*

*Build a prototype of this short order receipts tracker.*

## Sample Receipts
You'll be rendering some sample receipts:

const receipts = [ { person: 'Karolin', order: { main: 'Burrito', protein: 'Organic Tofu', rice: 'Purple Rice', sauce: 'Green Crack', toppings: [ 'Baby Bok Choy', 'Cucumber Kimchi' ], drink: 'Korchata', cost: 22 }, paid: false }, { person: 'Mark', order: { main: 'Rice Bowl', protein: 'Ginger Soy Chix', rice: 'Sticky Rice', sauce: 'Korilla', toppings: [ 'Yuzu Pickled Sweet Pepper', 'Kale' ], drink: 'Korchata', cost: 19 }, paid: false }, { person: 'Matt', order: { main: 'Salad Bowl', protein: 'Organic Tofu', rice: 'none', sauce: "K'lla", toppings: [ 'Blue Potato Salad', 'Pico De Gallo', 'Red Kimchi' ], drink: 'Sparkling Blood Orange Soda', cost: 20 }, paid: true } ] 
Add receipts to the state of the app:
function App() {
  let [receipts, setReceipts] = useState(receipts)
  
Make a Receipt component that renders the receipt's
person
order
main
protein
rice
sauce
drink
cost
 
![image](https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210914130327/100-Days-of-Code-with-GFG-Get-Committed-to-a-Challenge.png)

Render the toppings too. You'll need a couple more Receipt components so that you get a view like this (a little css provided for clarity, but not required)

Conditionally Render the receipts if they have been paid or not
Right now, all the receipts are not paid ( paid: false)

Set up a ternary operator to display the receipt if it has not been paid.

Then go into the receipt data and change the value to true and check that the receipt will not display

Hungry For More
Add a click event on the receipt that changes the value of paid from false to true. Once clicked the receipt should immediately disappear from the browser view#