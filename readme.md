

# KhetiFy 🚜

This project is for GeeksForGeeks solving for India Hackathon on AgroTech topic.

## Visit

> NOTE: **Community chat and Inventory management features are only working on the local hosts not on this hosted link due to the AMD instance's limited credits Issue we have switched off the backend server instance for now.
> If you want to use those features please run them on the local machine. Instructions to run it on the local host are given at the end of this readme :)**

Visit our website here: [KhetiFy](https://khetify.netlify.app/)

## About

Welcome to our agriculture technology and farming website - **KhetiFy** ! We are dedicated to offering new solutions that assist farmers run their farms more efficiently and effectively. Our platform provides a variety of tools and resources, such as crop management systems, weather predictions, and market information, to assist farmers in optimizing yields and improving profitability. Furthermore, we create a platform for farmers to sell their products and vegetables directly to consumers, eliminating intermediaries and assuring fair rates for both sides. Join us in embracing the future of farming and developing together!
## How to run locally?

 - Open the index.html to get started (Live server preferred)
 - log in using Google authentication to get access to the homepage
 - Now you can access the full website and all its features except the community chat and inventory page. To access these two features please follow steps below:
	 - Change the directory to `inventory/inventoryClient`.
	 - run the command `npm i --force` to install the required packages by the client.
	 - then run `npm start` to start the client.
	 - go back to the main directory "Solving-for-India" by running `cd ..` 2 times.
	 - Change the directory to `inventory/inventoryServer`.
	 - run the command `npm i --force` to install the required packages by the server.
	 - then run `nodemon server` to start the server.
	 - go back to the main directory "Solving-for-India" by running `cd ..` 2 times.
	 - ====================================
	 - Change the directory to `Community/client`.
	 - run the command `npm i --force` to install the required packages by the client.
	 - then run `npm start` to start the client.
	 - go back to the main directory "Solving-for-India" by running `cd ..` 2 times.
	 - Change the directory to `Community/server`.
	 - run the command `npm i --force` to install the required packages by the server.
	 - then run `npm index.js` to start the server.
	 
	 
*Congratulations you have successfully started the server and client for the Community page and Inventory page.
Now Go back to the homepage and give it a refresh and you can access the full website and explore it.*

> **NOTE: The graph on our website that shows the rates of common crops uses the free version of Commodity Rates API which only allows 100 requests per month, so it many not work always after the key expires.
> the KhetiFy AI bot uses OpenAI's API free plan so it also may take a bit longer to respond but works all the time and is fully functional.**


## Screenshots


<img width="1440" alt="Screenshot 2023-04-15 at 21 59 30" src="https://user-images.githubusercontent.com/80591258/232238250-3e77d1ae-3a48-4725-aed2-806d38ef4ddc.png">
<img width="1440" alt="Screenshot 2023-04-15 at 21 59 45" src="https://user-images.githubusercontent.com/80591258/232238395-6a37d0b2-f444-4b4c-9059-59c9c7fb6271.png">
<img width="1440" alt="Screenshot 2023-04-15 at 21 59 56" src="https://user-images.githubusercontent.com/80591258/232238401-c1e498b9-eaae-4cfb-80cb-f2901827528c.png">
<img width="1440" alt="Screenshot 2023-04-15 at 22 00 11" src="https://user-images.githubusercontent.com/80591258/232238405-d03e84b9-0a33-4360-901a-db55ec3dfa69.png">
<img width="1440" alt="Screenshot 2023-04-15 at 22 00 30" src="https://user-images.githubusercontent.com/80591258/232238433-4c7d3fe9-b94f-49f6-85fe-05a9748bbe40.png">
<img width="1440" alt="Screenshot 2023-04-15 at 22 00 45" src="https://user-images.githubusercontent.com/80591258/232238441-3c4e04f0-0070-4b88-99d2-775133257bbb.png">
<img width="1440" alt="Screenshot 2023-04-15 at 22 01 05" src="https://user-images.githubusercontent.com/80591258/232238452-847be710-2ac3-43a1-8fb6-98b238f0bb50.png">
<img width="1440" alt="Screenshot 2023-04-15 at 22 01 57" src="https://user-images.githubusercontent.com/80591258/232238460-ca38115e-1c3b-4a76-bc2a-f06e41fdd3e4.png">
<img width="1440" alt="Screenshot 2023-04-15 at 22 13 03" src="https://user-images.githubusercontent.com/80591258/232238652-189e1918-e970-4b6d-b41d-54782ba69cd5.png">

Hindi Version:

<img width="1439" alt="Screenshot 2023-04-15 at 22 02 35" src="https://user-images.githubusercontent.com/80591258/232238465-f432e95b-796a-4ef8-b3d6-50ababbf497d.png">
<img width="1439" alt="Screenshot 2023-04-15 at 22 02 43" src="https://user-images.githubusercontent.com/80591258/232238474-66080534-5c90-4e0a-a6a8-0caffdae1f5a.png">
<img width="1440" alt="Screenshot 2023-04-15 at 22 02 55" src="https://user-images.githubusercontent.com/80591258/232238477-ac059ebb-275f-4e6b-9e14-2c85f6b13025.png">

Feedback page:

<img width="1440" alt="Screenshot 2023-04-15 at 22 03 20" src="https://user-images.githubusercontent.com/80591258/232238482-2228846f-42a7-441d-a9c8-607942e72020.png">

Google OAuth Dashboard:

![WhatsApp Image 2023-04-15 at 22 07 10](https://user-images.githubusercontent.com/80591258/232238692-eb7d6652-b0ac-474e-9bc5-7992342f4254.jpeg)

Video:

https://user-images.githubusercontent.com/80591258/232239043-9b92a00b-0924-44c1-8324-09e5f2b5c639.mp4


## References and tools/APIs used

 - OpenWeather API 
 - OpenAI's API 
 - Commodity Rates API 
 - Google Cloud platform's oAuth for login 
 - Google Cloud platform's AMD instances for Inventory backed hosting (Now removed and closed due to limited credits and credit card problems)
 - FontAwesome
 - ReactJS
 - Node.JS
 - BootStrap

