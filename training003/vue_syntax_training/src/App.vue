<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import VOnce from './components/V_Once.vue'
import VPre from './components/V_Pre.vue'
import VHtml from './components/V_Html.vue'
import VCloak from './components/V_Cloak.vue'
import VText from './components/V_Text.vue'
import JsExpression from './components/JsExpression.vue'
import VBindShortHands from './components/V_BindShortHands.vue'
import ComputedProp from './components/ComputedProp.vue'
import WatchProp from './components/WatchProp.vue'
import ClassStyleBinding from './components/Class_Style_Binding.vue'
import VIfElse from './components/V_IfElse.vue'
import VShow from './components/V_Show.vue'
import EventHandler from './components/EventHandler.vue'
import VModel from './components/V_Model.vue'
import VTransition from './components/Transition.vue'
</script>

<template>
  <h1>vue の様々なディレクティブ</h1>
  <VOnce></VOnce>
  <hr>
  <VPre></VPre>
  <hr>
  <VHtml></VHtml>
  <hr>
  <VCloak></VCloak>
  <hr>
  <VText></VText>
  <hr>
  <JsExpression></JsExpression>
  <hr>
  <VBindShortHands></VBindShortHands>
  <hr>
  <ComputedProp></ComputedProp>
  <hr>
  <WatchProp></WatchProp>
  <hr>
  <ClassStyleBinding></ClassStyleBinding>
  <hr>
  <VIfElse></VIfElse>
  <hr>
  <VShow></VShow>
  <hr>
  <EventHandler></EventHandler>
  <hr>
  <VModel></VModel>
  <hr>
  <VTransition></VTransition>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
