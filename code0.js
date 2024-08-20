gdjs.Escena_32sin_32t_237tuloCode = {};
gdjs.Escena_32sin_32t_237tuloCode.localVariables = [];
gdjs.Escena_32sin_32t_237tuloCode.GDMonedaObjects1= [];
gdjs.Escena_32sin_32t_237tuloCode.GDMonedaObjects2= [];
gdjs.Escena_32sin_32t_237tuloCode.GDDineroObjects1= [];
gdjs.Escena_32sin_32t_237tuloCode.GDDineroObjects2= [];
gdjs.Escena_32sin_32t_237tuloCode.GDMasObjects1= [];
gdjs.Escena_32sin_32t_237tuloCode.GDMasObjects2= [];
gdjs.Escena_32sin_32t_237tuloCode.GDA_95241adirObjects1= [];
gdjs.Escena_32sin_32t_237tuloCode.GDA_95241adirObjects2= [];


gdjs.Escena_32sin_32t_237tuloCode.mapOfGDgdjs_9546Escena_959532sin_959532t_9595237tuloCode_9546GDMasObjects1Objects = Hashtable.newFrom({"Mas": gdjs.Escena_32sin_32t_237tuloCode.GDMasObjects1});
gdjs.Escena_32sin_32t_237tuloCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Mas"), gdjs.Escena_32sin_32t_237tuloCode.GDMasObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Escena_32sin_32t_237tuloCode.mapOfGDgdjs_9546Escena_959532sin_959532t_9595237tuloCode_9546GDMasObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Escena_32sin_32t_237tuloCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Escena_32sin_32t_237tuloCode.GDMonedaObjects1.length = 0;
gdjs.Escena_32sin_32t_237tuloCode.GDMonedaObjects2.length = 0;
gdjs.Escena_32sin_32t_237tuloCode.GDDineroObjects1.length = 0;
gdjs.Escena_32sin_32t_237tuloCode.GDDineroObjects2.length = 0;
gdjs.Escena_32sin_32t_237tuloCode.GDMasObjects1.length = 0;
gdjs.Escena_32sin_32t_237tuloCode.GDMasObjects2.length = 0;
gdjs.Escena_32sin_32t_237tuloCode.GDA_95241adirObjects1.length = 0;
gdjs.Escena_32sin_32t_237tuloCode.GDA_95241adirObjects2.length = 0;

gdjs.Escena_32sin_32t_237tuloCode.eventsList0(runtimeScene);

return;

}

gdjs['Escena_32sin_32t_237tuloCode'] = gdjs.Escena_32sin_32t_237tuloCode;
