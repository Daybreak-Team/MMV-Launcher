// ==EMEVD==
// @docs    nr-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "W:\\CL\\data\\Param\\event\\common_func.emevd\u0000W:\\CL\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.6.2
// ==/EMEVD==

$Event(0, Default, function() {
    if (IsMapVariation(1)) {
        $InitializeEvent(1, 40102500, 1, 40100500, 40101597, 40101587);
        $InitializeEvent(1, 40102503, 1, 40100500);
        $InitializeEvent(1, 40102505, 1, 40100500);
        $InitializeEvent(1, 40102590, 1, 40100510, 40100500, 40105000);
    } else if (IsMapVariation(2)) {
        $InitializeEvent(2, 40102500, 2, 40100501, 40101597, 40101587);
        $InitializeEvent(2, 40102503, 2, 40100501);
        $InitializeEvent(2, 40102505, 2, 40100501);
        $InitializeEvent(2, 40102590, 2, 40100511, 40100501, 40105010);
    } else if (IsMapVariation(3)) {
        $InitializeEvent(3, 40102500, 3, 40100502, 40101597, 40101587);
        $InitializeEvent(3, 40102503, 3, 40100502);
        $InitializeEvent(3, 40102505, 3, 40100502);
        $InitializeEvent(3, 40102590, 3, 40100512, 40100502, 40105020);
    }
    $InitializeCommonEvent(0, 90015500, 40102320);
});

$Event(40102500, Restart, function(mapVariationId, eventFlagId, assetEntityId, assetEntityId2) {
    EndIf(!IsMapVariation(mapVariationId));
    if (EventFlag(eventFlagId)) {
        DisableAsset(assetEntityId);
        DisableAsset(assetEntityId2);
        EndEvent();
    }
L0:
    WaitFor(EventFlag(eventFlagId));
    DeleteAssetfollowingSFX(assetEntityId, true);
    DisableAsset(assetEntityId);
    DeleteAssetfollowingSFX(assetEntityId2, true);
    DisableAsset(assetEntityId2);
    DeleteMapSFX(assetEntityId2, false);
    PlaySE(assetEntityId, SoundType.SFX, 1500);
    WaitFixedTimeSeconds(0.5);
    RecordUserDispLog(11225, assetEntityId, LogObjectType.None, -1);
});

$Event(40102503, Default, function(mapVariationId, eventFlagId) {
    EndIf(!IsMapVariation(mapVariationId));
    WaitFor(EventFlag(eventFlagId));
    SetWorldMapPointFlag(6, ON);
    SetWorldMapPointFlag(8, OFF);
});

$Event(40102505, Default, function(mapVariationId, eventFlagId) {
    EndIf(!IsMapVariation(mapVariationId));
    EndIf(EventFlag(eventFlagId));
    WaitFor(EventFlag(eventFlagId));
    IncrementNetworkconnectedEventValue(8140, 4, 7);
});

$Event(40102590, Restart, function(mapVariationId, eventFlagId, eventFlagId2, chrEntityId) {
    EndIf(!IsMapVariation(mapVariationId));
    if (EventFlag(eventFlagId)) {
        EndEvent();
    }
L0:
    WaitFor(CharacterRatioDead(chrEntityId));
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
    SetNetworkconnectedEventFlagID(eventFlagId2, ON);
});


