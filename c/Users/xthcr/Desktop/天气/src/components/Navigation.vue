<div @mouseover="mouseoverFun" @mouseleave="mouseleaveFun" v-if="control1" class="hidden1">
    <table>
        <tr>
            <td>已关注的城市</td>
        </tr>
        <!-- 仅当数组有第0项时渲染 -->
        <tr v-if="arr.value.length > 0">
            <td @click="handleCityChange(arr.value[0])">{{ arr.value[0] }}</td>
            <td class="clear">清除</td>
        </tr>
        <!-- 仅当数组有第1项时渲染 -->
        <tr v-if="arr.value.length > 1">
            <td @click="handleCityChange(arr.value[1])">{{ arr.value[1] }}</td>
            <td class="clear">清除</td>
        </tr>
    </table>
</div>