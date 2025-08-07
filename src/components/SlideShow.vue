<script setup>

</script>
<template>
    <div class="hourly-list">
        <div class="hourly-title">
            <div>24小时预报</div>
            <div class="empty"></div>
            <div>更新时间: 14:30</div>
        </div>
        <div class="hourly-container">
            <div class="everyhour">
                <div class="time">14:00</div>
                <div class="icon"><img src="../img/SlideShowImg/c3c35fb9-e118-492e-8535-998df68960a3.png" alt=""></div>
                <div class="temp">26°</div>
            </div>
            <div class="everyhour">
                <div class="time">15:00</div>
                <div class="icon"><img src="../img/SlideShowImg/c3c35fb9-e118-492e-8535-998df68960a3.png" alt=""></div>
                <div class="temp">27°</div>
            </div>
            <div class="everyhour">
                <div class="time">16:00</div>
                <div class="icon"><img src="../img/SlideShowImg/c3c35fb9-e118-492e-8535-998df68960a3.png" alt=""></div>
                <div class="temp">28°</div>
            </div>
            <div class="everyhour">
                <div class="time">17:00</div>
                <div class="icon"><img src="../img/SlideShowImg/c3c35fb9-e118-492e-8535-998df68960a3.png" alt=""></div>
                <div class="temp">27°</div>
            </div>
            <div class="everyhour">
                <div class="time">18:00</div>
                <div class="icon"><img src="../img/SlideShowImg/c3c35fb9-e118-492e-8535-998df68960a3.png" alt=""></div>
                <div class="temp">26°</div>
            </div>
            <div class="everyhour">
                <div class="time">19:00</div>
                <div class="icon"><img src="../img/SlideShowImg/c3c35fb9-e118-492e-8535-998df68960a3.png" alt=""></div>
                <div class="temp">25°</div>
            </div>
            <div class="everyhour">
                <div class="time">20:00</div>
                <div class="icon"><img src="../img/SlideShowImg/c3c35fb9-e118-492e-8535-998df68960a3.png" alt=""></div>
                <div class="temp">24°</div>
            </div>
            <div class="everyhour">
                <div class="time">21:00</div>
                <div class="icon"><img src="../img/SlideShowImg/c3c35fb9-e118-492e-8535-998df68960a3.png" alt=""></div>
                <div class="temp">23°</div>
            </div>
            <div class="everyhour">
                <div class="time">22:00</div>
                <div class="icon"><img src="../img/SlideShowImg/c3c35fb9-e118-492e-8535-998df68960a3.png" alt=""></div>
                <div class="temp">22°</div>
            </div>
            <div class="everyhour">
                <div class="time">23:00</div>
                <div class="icon"><img src="../img/SlideShowImg/c3c35fb9-e118-492e-8535-998df68960a3.png" alt=""></div>
                <div class="temp">22°</div>
            </div>
            <div class="everyhour">
                <div class="time">24:00</div>
                <div class="icon"><img src="../img/SlideShowImg/c3c35fb9-e118-492e-8535-998df68960a3.png" alt=""></div>
                <div class="temp">22°</div>
            </div>
            <div class="everyhour">
                <div class="time">24:00</div>
                <div class="icon"><img src="../img/SlideShowImg/c3c35fb9-e118-492e-8535-998df68960a3.png" alt=""></div>
                <div class="temp">22°</div>
            </div>
            <div class="everyhour">
                <div class="time">24:00</div>
                <div class="icon"><img src="../img/SlideShowImg/c3c35fb9-e118-492e-8535-998df68960a3.png" alt=""></div>
                <div class="temp">22°</div>
            </div>
            <div class="everyhour">
                <div class="time">24:00</div>
                <div class="icon"><img src="../img/SlideShowImg/c3c35fb9-e118-492e-8535-998df68960a3.png" alt=""></div>
                <div class="temp">22°</div>
            </div>
        </div>
    </div>
</template>
<style>
        .hourly-list {
            background: rgba(255, 255, 255, 0.15);
            border-radius: 20px;
            padding: 20px;
            margin-bottom: 30px;
            backdrop-filter: blur(10px);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }

        .section-title {
            font-size: 18px;
            margin-bottom: 15px;
            display: flex;
            /* justify-content: space-between; */
            align-items: center;
        }
        .empty{
            flex: 8;
        }

        .hourly-container {
            display: flex;
            justify-content: space-between;
            overflow-x: auto;
            padding: 10px 0;
            gap: 25px;
        }



        .everyhour {
            display: flex;
            flex-direction: column;
            align-items: center;
            min-width: 60px;
        }

        .hour-item .time {
            font-size: 14px;
            margin-bottom: 8px;
        }

        .hour-item .icon {
            font-size: 24px;
            margin-bottom: 8px;
            color: #FFD700;
        }

        .hour-item .temp {
            font-size: 16px;
            font-weight: 500;
        }


</style>