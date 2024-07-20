gdjs.Moving_32Saw_32PlatformerCode = {};
gdjs.Moving_32Saw_32PlatformerCode.localVariables = [];
gdjs.Moving_32Saw_32PlatformerCode.GDSawObjects1= [];
gdjs.Moving_32Saw_32PlatformerCode.GDSawObjects2= [];
gdjs.Moving_32Saw_32PlatformerCode.GDSawObjects3= [];
gdjs.Moving_32Saw_32PlatformerCode.GDTitle_9595TextObjects1= [];
gdjs.Moving_32Saw_32PlatformerCode.GDTitle_9595TextObjects2= [];
gdjs.Moving_32Saw_32PlatformerCode.GDTitle_9595TextObjects3= [];
gdjs.Moving_32Saw_32PlatformerCode.GDControls_9595TextObjects1= [];
gdjs.Moving_32Saw_32PlatformerCode.GDControls_9595TextObjects2= [];
gdjs.Moving_32Saw_32PlatformerCode.GDControls_9595TextObjects3= [];
gdjs.Moving_32Saw_32PlatformerCode.GDTimer_9595TextObjects1= [];
gdjs.Moving_32Saw_32PlatformerCode.GDTimer_9595TextObjects2= [];
gdjs.Moving_32Saw_32PlatformerCode.GDTimer_9595TextObjects3= [];
gdjs.Moving_32Saw_32PlatformerCode.GDGameOver_9595TextObjects1= [];
gdjs.Moving_32Saw_32PlatformerCode.GDGameOver_9595TextObjects2= [];
gdjs.Moving_32Saw_32PlatformerCode.GDGameOver_9595TextObjects3= [];
gdjs.Moving_32Saw_32PlatformerCode.GDPlatformObjects1= [];
gdjs.Moving_32Saw_32PlatformerCode.GDPlatformObjects2= [];
gdjs.Moving_32Saw_32PlatformerCode.GDPlatformObjects3= [];
gdjs.Moving_32Saw_32PlatformerCode.GDMovingPlatformObjects1= [];
gdjs.Moving_32Saw_32PlatformerCode.GDMovingPlatformObjects2= [];
gdjs.Moving_32Saw_32PlatformerCode.GDMovingPlatformObjects3= [];
gdjs.Moving_32Saw_32PlatformerCode.GDTrophyParticlesObjects1= [];
gdjs.Moving_32Saw_32PlatformerCode.GDTrophyParticlesObjects2= [];
gdjs.Moving_32Saw_32PlatformerCode.GDTrophyParticlesObjects3= [];
gdjs.Moving_32Saw_32PlatformerCode.GDFlyerTrailObjects1= [];
gdjs.Moving_32Saw_32PlatformerCode.GDFlyerTrailObjects2= [];
gdjs.Moving_32Saw_32PlatformerCode.GDFlyerTrailObjects3= [];
gdjs.Moving_32Saw_32PlatformerCode.GDGreenHeroObjects1= [];
gdjs.Moving_32Saw_32PlatformerCode.GDGreenHeroObjects2= [];
gdjs.Moving_32Saw_32PlatformerCode.GDGreenHeroObjects3= [];
gdjs.Moving_32Saw_32PlatformerCode.GDTrophyObjects1= [];
gdjs.Moving_32Saw_32PlatformerCode.GDTrophyObjects2= [];
gdjs.Moving_32Saw_32PlatformerCode.GDTrophyObjects3= [];
gdjs.Moving_32Saw_32PlatformerCode.GDBluePlayerObjects1= [];
gdjs.Moving_32Saw_32PlatformerCode.GDBluePlayerObjects2= [];
gdjs.Moving_32Saw_32PlatformerCode.GDBluePlayerObjects3= [];
gdjs.Moving_32Saw_32PlatformerCode.GDHiddenPathMarkerObjects1= [];
gdjs.Moving_32Saw_32PlatformerCode.GDHiddenPathMarkerObjects2= [];
gdjs.Moving_32Saw_32PlatformerCode.GDHiddenPathMarkerObjects3= [];


gdjs.Moving_32Saw_32PlatformerCode.mapOfGDgdjs_9546Moving_959532Saw_959532PlatformerCode_9546GDSawObjects2Objects = Hashtable.newFrom({"Saw": gdjs.Moving_32Saw_32PlatformerCode.GDSawObjects2});
gdjs.Moving_32Saw_32PlatformerCode.asyncCallback22751220 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Moving_32Saw_32PlatformerCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("GameOver_Text"), gdjs.Moving_32Saw_32PlatformerCode.GDGameOver_9595TextObjects3);
{for(var i = 0, len = gdjs.Moving_32Saw_32PlatformerCode.GDGameOver_9595TextObjects3.length ;i < len;++i) {
    gdjs.Moving_32Saw_32PlatformerCode.GDGameOver_9595TextObjects3[i].hide(false);
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("GameOver"), true);
}gdjs.Moving_32Saw_32PlatformerCode.localVariables.length = 0;
}
gdjs.Moving_32Saw_32PlatformerCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Moving_32Saw_32PlatformerCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Moving_32Saw_32PlatformerCode.asyncCallback22751220(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Moving_32Saw_32PlatformerCode.mapOfGDgdjs_9546Moving_959532Saw_959532PlatformerCode_9546GDSawObjects1Objects = Hashtable.newFrom({"Saw": gdjs.Moving_32Saw_32PlatformerCode.GDSawObjects1});
gdjs.Moving_32Saw_32PlatformerCode.asyncCallback22754012 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Moving_32Saw_32PlatformerCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("GameOver_Text"), gdjs.Moving_32Saw_32PlatformerCode.GDGameOver_9595TextObjects2);
{for(var i = 0, len = gdjs.Moving_32Saw_32PlatformerCode.GDGameOver_9595TextObjects2.length ;i < len;++i) {
    gdjs.Moving_32Saw_32PlatformerCode.GDGameOver_9595TextObjects2[i].setString("You won!");
}
}{for(var i = 0, len = gdjs.Moving_32Saw_32PlatformerCode.GDGameOver_9595TextObjects2.length ;i < len;++i) {
    gdjs.Moving_32Saw_32PlatformerCode.GDGameOver_9595TextObjects2[i].hide(false);
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("GameOver"), true);
}gdjs.Moving_32Saw_32PlatformerCode.localVariables.length = 0;
}
gdjs.Moving_32Saw_32PlatformerCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Moving_32Saw_32PlatformerCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Moving_32Saw_32PlatformerCode.asyncCallback22754012(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Moving_32Saw_32PlatformerCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GameOver_Text"), gdjs.Moving_32Saw_32PlatformerCode.GDGameOver_9595TextObjects2);
gdjs.copyArray(runtimeScene.getObjects("HiddenPathMarker"), gdjs.Moving_32Saw_32PlatformerCode.GDHiddenPathMarkerObjects2);
{for(var i = 0, len = gdjs.Moving_32Saw_32PlatformerCode.GDGameOver_9595TextObjects2.length ;i < len;++i) {
    gdjs.Moving_32Saw_32PlatformerCode.GDGameOver_9595TextObjects2[i].hide();
}
}{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 0.8, "", 0);
}{for(var i = 0, len = gdjs.Moving_32Saw_32PlatformerCode.GDHiddenPathMarkerObjects2.length ;i < len;++i) {
    gdjs.Moving_32Saw_32PlatformerCode.GDHiddenPathMarkerObjects2[i].hide();
}
}{/* Unknown object - skipped. */}}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown object - skipped. */if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("GameStarted"), false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Timer");
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("GameStarted"), true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown object - skipped. */if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(22749740);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MovingPlatform"), gdjs.Moving_32Saw_32PlatformerCode.GDMovingPlatformObjects2);
gdjs.copyArray(runtimeScene.getObjects("Saw"), gdjs.Moving_32Saw_32PlatformerCode.GDSawObjects2);
{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "Timer");
}{gdjs.evtTools.object.pickAllObjects((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Moving_32Saw_32PlatformerCode.mapOfGDgdjs_9546Moving_959532Saw_959532PlatformerCode_9546GDSawObjects2Objects);
}{for(var i = 0, len = gdjs.Moving_32Saw_32PlatformerCode.GDSawObjects2.length ;i < len;++i) {
    gdjs.Moving_32Saw_32PlatformerCode.GDSawObjects2[i].pauseAnimation();
}
}{/* Unknown object - skipped. */}{for(var i = 0, len = gdjs.Moving_32Saw_32PlatformerCode.GDSawObjects2.length ;i < len;++i) {
    gdjs.Moving_32Saw_32PlatformerCode.GDSawObjects2[i].activateBehavior("RectangleMovement", false);
}
}{for(var i = 0, len = gdjs.Moving_32Saw_32PlatformerCode.GDMovingPlatformObjects2.length ;i < len;++i) {
    gdjs.Moving_32Saw_32PlatformerCode.GDMovingPlatformObjects2[i].activateBehavior("RectangleMovement", false);
}
}{/* Unknown object - skipped. */}{gdjs.evtTools.tween.tweenCamera(runtimeScene, "CenterOnHero", 0, 0, "", 500, "easeOutQuad");
}{gdjs.evtTools.tween.tweenCameraZoom(runtimeScene, "ZoomIn", 1.5, "", 1000, "easeOutQuad");
}
{ //Subevents
gdjs.Moving_32Saw_32PlatformerCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown object - skipped. */if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(22752844);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MovingPlatform"), gdjs.Moving_32Saw_32PlatformerCode.GDMovingPlatformObjects1);
gdjs.copyArray(runtimeScene.getObjects("Saw"), gdjs.Moving_32Saw_32PlatformerCode.GDSawObjects1);
{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "Timer");
}{gdjs.evtTools.object.pickAllObjects((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Moving_32Saw_32PlatformerCode.mapOfGDgdjs_9546Moving_959532Saw_959532PlatformerCode_9546GDSawObjects1Objects);
}{for(var i = 0, len = gdjs.Moving_32Saw_32PlatformerCode.GDSawObjects1.length ;i < len;++i) {
    gdjs.Moving_32Saw_32PlatformerCode.GDSawObjects1[i].pauseAnimation();
}
}{/* Unknown object - skipped. */}{for(var i = 0, len = gdjs.Moving_32Saw_32PlatformerCode.GDSawObjects1.length ;i < len;++i) {
    gdjs.Moving_32Saw_32PlatformerCode.GDSawObjects1[i].activateBehavior("RectangleMovement", false);
}
}{for(var i = 0, len = gdjs.Moving_32Saw_32PlatformerCode.GDMovingPlatformObjects1.length ;i < len;++i) {
    gdjs.Moving_32Saw_32PlatformerCode.GDMovingPlatformObjects1[i].activateBehavior("RectangleMovement", false);
}
}{/* Unknown object - skipped. */}{gdjs.evtTools.tween.tweenCamera(runtimeScene, "CenterOnHero", 0, 0, "", 500, "easeOutQuad");
}{gdjs.evtTools.tween.tweenCameraZoom(runtimeScene, "ZoomIn", 1.5, "", 1000, "easeOutQuad");
}
{ //Subevents
gdjs.Moving_32Saw_32PlatformerCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.Moving_32Saw_32PlatformerCode.mapOfGDgdjs_9546Moving_959532Saw_959532PlatformerCode_9546GDSawObjects2Objects = Hashtable.newFrom({"Saw": gdjs.Moving_32Saw_32PlatformerCode.GDSawObjects2});
gdjs.Moving_32Saw_32PlatformerCode.mapOfGDgdjs_9546Moving_959532Saw_959532PlatformerCode_9546GDPlatformObjects2ObjectsGDgdjs_9546Moving_959532Saw_959532PlatformerCode_9546GDMovingPlatformObjects2Objects = Hashtable.newFrom({"Platform": gdjs.Moving_32Saw_32PlatformerCode.GDPlatformObjects2, "MovingPlatform": gdjs.Moving_32Saw_32PlatformerCode.GDMovingPlatformObjects2});
gdjs.Moving_32Saw_32PlatformerCode.mapOfGDgdjs_9546Moving_959532Saw_959532PlatformerCode_9546GDSawObjects1Objects = Hashtable.newFrom({"Saw": gdjs.Moving_32Saw_32PlatformerCode.GDSawObjects1});
gdjs.Moving_32Saw_32PlatformerCode.mapOfGDgdjs_9546Moving_959532Saw_959532PlatformerCode_9546GDPlatformObjects1ObjectsGDgdjs_9546Moving_959532Saw_959532PlatformerCode_9546GDMovingPlatformObjects1Objects = Hashtable.newFrom({"Platform": gdjs.Moving_32Saw_32PlatformerCode.GDPlatformObjects1, "MovingPlatform": gdjs.Moving_32Saw_32PlatformerCode.GDMovingPlatformObjects1});
gdjs.Moving_32Saw_32PlatformerCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MovingPlatform"), gdjs.Moving_32Saw_32PlatformerCode.GDMovingPlatformObjects2);
gdjs.copyArray(runtimeScene.getObjects("Platform"), gdjs.Moving_32Saw_32PlatformerCode.GDPlatformObjects2);
gdjs.copyArray(runtimeScene.getObjects("Saw"), gdjs.Moving_32Saw_32PlatformerCode.GDSawObjects2);
{gdjs.evtsExt__RectangleMovement__MoveToNearestCorner.func(runtimeScene, gdjs.Moving_32Saw_32PlatformerCode.mapOfGDgdjs_9546Moving_959532Saw_959532PlatformerCode_9546GDSawObjects2Objects, "RectangleMovement", gdjs.Moving_32Saw_32PlatformerCode.mapOfGDgdjs_9546Moving_959532Saw_959532PlatformerCode_9546GDPlatformObjects2ObjectsGDgdjs_9546Moving_959532Saw_959532PlatformerCode_9546GDMovingPlatformObjects2Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{/* Unknown object - skipped. */}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("MovingPlatform"), gdjs.Moving_32Saw_32PlatformerCode.GDMovingPlatformObjects1);
gdjs.copyArray(runtimeScene.getObjects("Platform"), gdjs.Moving_32Saw_32PlatformerCode.GDPlatformObjects1);
gdjs.copyArray(runtimeScene.getObjects("Saw"), gdjs.Moving_32Saw_32PlatformerCode.GDSawObjects1);
{gdjs.evtsExt__RectangleMovement__MoveAlongBorderOfObject.func(runtimeScene, gdjs.Moving_32Saw_32PlatformerCode.mapOfGDgdjs_9546Moving_959532Saw_959532PlatformerCode_9546GDSawObjects1Objects, "RectangleMovement", gdjs.Moving_32Saw_32PlatformerCode.mapOfGDgdjs_9546Moving_959532Saw_959532PlatformerCode_9546GDPlatformObjects1ObjectsGDgdjs_9546Moving_959532Saw_959532PlatformerCode_9546GDMovingPlatformObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{/* Unknown object - skipped. */}}

}


};gdjs.Moving_32Saw_32PlatformerCode.eventsList4 = function(runtimeScene) {

{


gdjs.Moving_32Saw_32PlatformerCode.eventsList2(runtimeScene);
}


{


gdjs.Moving_32Saw_32PlatformerCode.eventsList3(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Timer_Text"), gdjs.Moving_32Saw_32PlatformerCode.GDTimer_9595TextObjects1);
{for(var i = 0, len = gdjs.Moving_32Saw_32PlatformerCode.GDTimer_9595TextObjects1.length ;i < len;++i) {
    gdjs.Moving_32Saw_32PlatformerCode.GDTimer_9595TextObjects1[i].setString("Time: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.roundTo(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "Timer"), 2)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("GameOver"), true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.anyKeyReleased(runtimeScene);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_any_button_released.func(runtimeScene, 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Moving Saw Platformer", false);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("GreenHero"), gdjs.Moving_32Saw_32PlatformerCode.GDGreenHeroObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Moving_32Saw_32PlatformerCode.GDGreenHeroObjects1.length !== 0 ? gdjs.Moving_32Saw_32PlatformerCode.GDGreenHeroObjects1[0] : null), true, "", 0);
}}

}


{


let isConditionTrue_0 = false;
{
{/* Unknown object - skipped. */}}

}


{


let isConditionTrue_0 = false;
{
{/* Unknown object - skipped. */}}

}


{


let isConditionTrue_0 = false;
{
{/* Unknown object - skipped. */}}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 30);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown object - skipped. */if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "New sound effect3", false, 37, 1);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.sound.playMusic(runtimeScene, "vintage old money   playlist3.mp3", false, 18, 1);
}}

}


};

gdjs.Moving_32Saw_32PlatformerCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Moving_32Saw_32PlatformerCode.GDSawObjects1.length = 0;
gdjs.Moving_32Saw_32PlatformerCode.GDSawObjects2.length = 0;
gdjs.Moving_32Saw_32PlatformerCode.GDSawObjects3.length = 0;
gdjs.Moving_32Saw_32PlatformerCode.GDTitle_9595TextObjects1.length = 0;
gdjs.Moving_32Saw_32PlatformerCode.GDTitle_9595TextObjects2.length = 0;
gdjs.Moving_32Saw_32PlatformerCode.GDTitle_9595TextObjects3.length = 0;
gdjs.Moving_32Saw_32PlatformerCode.GDControls_9595TextObjects1.length = 0;
gdjs.Moving_32Saw_32PlatformerCode.GDControls_9595TextObjects2.length = 0;
gdjs.Moving_32Saw_32PlatformerCode.GDControls_9595TextObjects3.length = 0;
gdjs.Moving_32Saw_32PlatformerCode.GDTimer_9595TextObjects1.length = 0;
gdjs.Moving_32Saw_32PlatformerCode.GDTimer_9595TextObjects2.length = 0;
gdjs.Moving_32Saw_32PlatformerCode.GDTimer_9595TextObjects3.length = 0;
gdjs.Moving_32Saw_32PlatformerCode.GDGameOver_9595TextObjects1.length = 0;
gdjs.Moving_32Saw_32PlatformerCode.GDGameOver_9595TextObjects2.length = 0;
gdjs.Moving_32Saw_32PlatformerCode.GDGameOver_9595TextObjects3.length = 0;
gdjs.Moving_32Saw_32PlatformerCode.GDPlatformObjects1.length = 0;
gdjs.Moving_32Saw_32PlatformerCode.GDPlatformObjects2.length = 0;
gdjs.Moving_32Saw_32PlatformerCode.GDPlatformObjects3.length = 0;
gdjs.Moving_32Saw_32PlatformerCode.GDMovingPlatformObjects1.length = 0;
gdjs.Moving_32Saw_32PlatformerCode.GDMovingPlatformObjects2.length = 0;
gdjs.Moving_32Saw_32PlatformerCode.GDMovingPlatformObjects3.length = 0;
gdjs.Moving_32Saw_32PlatformerCode.GDTrophyParticlesObjects1.length = 0;
gdjs.Moving_32Saw_32PlatformerCode.GDTrophyParticlesObjects2.length = 0;
gdjs.Moving_32Saw_32PlatformerCode.GDTrophyParticlesObjects3.length = 0;
gdjs.Moving_32Saw_32PlatformerCode.GDFlyerTrailObjects1.length = 0;
gdjs.Moving_32Saw_32PlatformerCode.GDFlyerTrailObjects2.length = 0;
gdjs.Moving_32Saw_32PlatformerCode.GDFlyerTrailObjects3.length = 0;
gdjs.Moving_32Saw_32PlatformerCode.GDGreenHeroObjects1.length = 0;
gdjs.Moving_32Saw_32PlatformerCode.GDGreenHeroObjects2.length = 0;
gdjs.Moving_32Saw_32PlatformerCode.GDGreenHeroObjects3.length = 0;
gdjs.Moving_32Saw_32PlatformerCode.GDTrophyObjects1.length = 0;
gdjs.Moving_32Saw_32PlatformerCode.GDTrophyObjects2.length = 0;
gdjs.Moving_32Saw_32PlatformerCode.GDTrophyObjects3.length = 0;
gdjs.Moving_32Saw_32PlatformerCode.GDBluePlayerObjects1.length = 0;
gdjs.Moving_32Saw_32PlatformerCode.GDBluePlayerObjects2.length = 0;
gdjs.Moving_32Saw_32PlatformerCode.GDBluePlayerObjects3.length = 0;
gdjs.Moving_32Saw_32PlatformerCode.GDHiddenPathMarkerObjects1.length = 0;
gdjs.Moving_32Saw_32PlatformerCode.GDHiddenPathMarkerObjects2.length = 0;
gdjs.Moving_32Saw_32PlatformerCode.GDHiddenPathMarkerObjects3.length = 0;

gdjs.Moving_32Saw_32PlatformerCode.eventsList4(runtimeScene);

return;

}

gdjs['Moving_32Saw_32PlatformerCode'] = gdjs.Moving_32Saw_32PlatformerCode;
