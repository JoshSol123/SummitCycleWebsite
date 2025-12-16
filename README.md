# SummitCycleWebsite

# Folder Setup 

# How files should look
HTML Files: index.html, inventory.html, services.html, trails.html, about.html, contact.html.

CSS Files: style.css (main styles) and any specific ones like trails.css or about.css.

# I can't say I understand the javascript that well. I had help from a computer programmer who helped me get the button working (Also is not too important as it is a supposedly basic checkout system so if you click add to cart or the cart in the top right it pops up a checkout screen)
JS File: shop.js

Images Folder

# How to add to inventory 

Find the <section> for the catagory (Gear, Hardtail Mountain Bikes)

Copy a <divclass="category-card"> block

Change img src to image of product and updatte <h3> title and description <p>

# IF IMAGES LOOK WEIRD 

I found the best way to fix it is using the height property to control how tall the image box is

Then object-fit: contain; to make sure the product is not cut off or stretched in the image #THIS IS THE MOST IMPORTANT PART

# For the checkout button 

From what I was told the Cart icon in the top right in the navbar calls a function created in the shop.js 
Every page NEEDS to have <div id="checkoutModal"> and the bottom of the html but before the </body> 

Also making sure every page has the connection <script src="shop.js" defer></script>
