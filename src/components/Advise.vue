<script setup>

</script>
<template>
    <div class="life-index">
            <div class="section-title">
                <span>生活指数</span>
            </div>
            <div class="index-container">
                <div class="index-item">
                    <div class="advise-type">
                        <img width="30px" height="30px" src="../img/AdviseImg/生活用品.png" alt="">
                        <span>穿衣指数</span>
                    </div>
                        <div class="index-level">舒适</div>
                        <div class="index-desc">建议穿薄外套、牛仔裤等服装</div>
                </div>

                <div class="index-item">
                    <div class="advise-type">
                        <img width="30px" height="30px" src="../img/AdviseImg/生活用品.png" alt="">
                        <span>穿衣指数</span>
                    </div>
                        <div class="index-level">舒适</div>
                        <div class="index-desc">建议穿薄外套、牛仔裤等服装</div>
                </div>

                <div class="index-item">
                    <div class="advise-type">
                        <img width="30px" height="30px" src="../img/AdviseImg/生活用品.png" alt="">
                        <span>穿衣指数</span>
                    </div>
                        <div class="index-level">舒适</div>
                        <div class="index-desc">建议穿薄外套、牛仔裤等服装</div>
                </div>

                <div class="index-item">
                    <div class="advise-type">
                        <img width="30px" height="30px" src="../img/AdviseImg/生活用品.png" alt="">
                        <span>穿衣指数</span>
                    </div>
                        <div class="index-level">舒适</div>
                        <div class="index-desc">建议穿薄外套、牛仔裤等服装</div>
                </div>
                </div>
    </div>

</template>
<style>
        .life-index {
            background: rgba(255, 255, 255, 0.15);
            border-radius: 20px;
            padding: 20px;
            backdrop-filter: blur(10px);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }

        .index-container {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
        }

        .index-item {
            background: rgba(255, 255, 255, 0.1);
            padding: 15px;
            border-radius: 15px;
        }

        .advise-type {
            display: flex;
            align-items: center;
            margin-bottom: 8px;
            font-size: 15px;
        }

        .advise-type i {
            margin-right: 8px;
            font-size: 18px;
        }

        .index-level {
            font-size: 18px;
            font-weight: 500;
            margin-bottom: 5px;
        }

        .index-desc {
            font-size: 13px;
            opacity: 0.9;
        }
        .advise-type img{
           
            margin-right: 5px;

        }
</style>