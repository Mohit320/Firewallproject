<template>
  <div>
    <h1>The WorkOut</h1>

    <div>
      <p>
        There is no limit to what you are capable of, physically and mentally.
        The Limit is about perseverance. The goal is to push yourself past your
        individual limit. We believe that each person requires unique training
        for their personal abilities. Our trainers are all certified and able to
        adapt to your needs, whether you are dealing with an injury or health
        issue, are pregnant or postpartum or you’re just looking for the
        ultimate challenge. There’s always a way to train hard and get results.
        Our videos provide a variety of workouts with movements that are simple,
        effective and safe, no matter your level. We prioritize proper form and
        biomechanics with clear instructions. Our goal is to make you feel
        strong and confident in yourself, no matter your level. We are excited
        to help you find your limit and push yourself past it. Now let’s do it
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "About",
};
</script>
<style>
 body {
        font-family: 'Baloo Bhai', cursive;
        color: #fffcfcc9;
        margin: 0px;
        padding: 0px;
        background: url('https://img.freepik.com/premium-photo/blurred-background-rows-black-dumbbells-rack-gym_42687-402.jpg?w=2000');
    }

    .left {
        display: inline-block;
        /* border: 2px solid red; */
        position: absolute;
        left: 60px;
        top: 20px;
    }

    .left img {
        width: 136px;
        filter: invert(100%);
    }

    .left div {
        line-height: 19px;
        font-size: 26px;
        text-align: center;
    }

    .mid {
        display: block;
        width: 36%;
        margin: 29px auto;
        background-color: black;
        /* border: 2px solid green; */
    }

    .right {
        position: absolute;
        right: 34px;
        top: 43px;
        display: inline-block;
        /* border: 2px solid yellow; */
    }

    .navbar {
        display: inline-block;
    }

    .navbar li {
        display: inline-table;
        font-size: 15px;
    }

    .navbar li a {
        color: white;
        text-decoration: none;
        padding: 34px 23px;

    }

    .navbar li a:hover,
    .navbar li a.active {
        text-decoration: underline;
        color: grey;

    }

    .btn {
        font-family: 'Baloo Bhai', cursive;
        margin: 0px 9px;
        background-color: black;
        color: white;
        padding: 4px 14px;
        border: 2px solid grey;
        border-radius: 10px;
        font-size: 20px;
        cursor: pointer;
    }

    .btn:hover {
        background-color: rgb(31, 30, 30);
    }

    .container {
        border: 2px solid white;
        margin: 106px 100px;
        padding: 75px;
        width: 60%;
        height: 100%;
        border-radius: 28px;
    }

    .form-group input {
        font-family: 'Baloo Bhai', cursive;
        text-align: center;
        display: block;
        width: 608px;
        padding: 1px;
        border: 2px solid black;
        margin: 11px auto;
        font-size: 25px;
        border-radius: 8px;
    }

    .container h1 {
        text-align: center;
        background-color: black;
    }

    .container button {
        display: block;
        width: 74%;
        margin: 20px auto;
    }
</style>