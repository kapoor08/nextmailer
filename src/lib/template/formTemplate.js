export const formTemplate = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Personal Details Form</title>
  </head>

  <body
    style="
      background-color: #28326f;
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 20px;
    "
  >
    <div
      style="
        max-width: 600px;
        margin: auto;
        padding: 20px;
        background-color: rgba(255, 255, 255, 0.1);
        border-radius: 10px;
      "
    >
      <h2 style="color: #fff; text-align: center; margin-bottom: 20px">
       Personal Details Form
      </h2>
      <form>
        <!-- Name -->
        <div style="margin-bottom: 15px">
          <label
            for="name"
            style="color: #fff; display: block; margin-bottom: 5px"
            >Name:</label
          >
          <input
            type="text"
            id="name"
            name="name"
            disabled
            placeholder="Name"
            style="
              width: 100%;
              padding: 10px;
              border-radius: 5px;
              background-color: #ffffff;
              color: #000;
              border: 1px solid #ccc;
              box-sizing: border-box;
            "
            value="{{name}}"
          />
        </div>

        <!-- Phone -->
        <div style="margin-bottom: 15px">
          <label
            for="phone"
            style="color: #fff; display: block; margin-bottom: 5px"
            >Phone:</label
          >
          <input
            type="text"
            id="phone"
            name="phone"
            disabled
            placeholder="(XXX) XXX-XXXX"
            style="
              width: 100%;
              padding: 10px;
              border-radius: 5px;
              background-color: #ffffff;
              color: #000;
              border: 1px solid #ccc;
              box-sizing: border-box;
            "
            value="{{phone}}"
          />
        </div>

        <!-- Email -->
        <div style="margin-bottom: 15px">
          <label
            for="email"
            style="color: #fff; display: block; margin-bottom: 5px"
            >Email:</label
          >
          <input
            type="email"
            id="email"
            name="email"
            disabled
            placeholder="sample@example.com"
            style="
              width: 100%;
              padding: 10px;
              border-radius: 5px;
              background-color: #ffffff;
              color: #000;
              border: 1px solid #ccc;
              box-sizing: border-box;
            "
            value="{{email}}"
          />
        </div>

        <!-- Message -->
        <div style="margin-bottom: 15px">
          <label
            for="message"
            style="color: #fff; display: block; margin-bottom: 5px"
            >Message:</label
          >
          <input
            type="text"
            id="message"
            name="message"
            placeholder="Message"
            disabled
            style="
              width: 100%;
              padding: 10px;
              border-radius: 5px;
              background-color: #ffffff;
              color: #000;
              border: 1px solid #ccc;
              box-sizing: border-box;
            "
           value="{{message}}"
          />
        </div>
      </form>
    </div>
  </body>
</html>`;
