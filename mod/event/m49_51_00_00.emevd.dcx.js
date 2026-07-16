// ==EMEVD==
// @docs    nr-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "W:\\CL\\data\\Param\\event\\common_func.emevd\u0000W:\\CL\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.6.2
// ==/EMEVD==

$Event(0, Default, function() {
    if (IsMapVariation(0)) {
        if (EventFlag(49510000)) {
            $InitializeCommonEvent(0, 90055000, 49515200, 1, 49512200, 49510201);
            $InitializeCommonEvent(0, 90055001, 49515200, 1, 49510201, 49510200);
        }
        if (EventFlag(49510001)) {
            $InitializeCommonEvent(0, 90055000, 49515200, 2, 49512200, 49510201);
            $InitializeCommonEvent(0, 90055001, 49515200, 2, 49510201, 49510200);
        }
    }
    if (IsMapVariation(1)) {
        $InitializeCommonEvent(0, 90035000, 49510200);
    }
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015442, 49512200, 49510200);
    }
    $InitializeCommonEvent(0, 90065910, 49510200, 49510205, 49510800, 920610, 690047, 49515210, 49510800, 905011000, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90065911, 49510200, 49510800, 920610, 49515210, 49510800, 905011000, 0, 0, 0, 0, 0);
    if (!IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90065900, 49510800, 1, 0, 0, 1050, 920610, 905011000, 49510800);
    }
    $InitializeCommonEvent(0, 90015012, 49515210, 49510200);
    $InitializeCommonEvent(1, 90015012, 0, 49510200);
    $InitializeCommonEvent(0, 90015020, 49510200, 49510800);
    $InitializeCommonEvent(0, 90015008, 49510205, 49510800, 920610, 49510800, 14771, 0);
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015443, 49512200, 49510800);
        $InitializeCommonEvent(0, 90015023, 49510200, 40, 0, 49515210, 49510800, 905011000, 0, 0, 0, 0);
        $InitializeCommonEvent(0, 90015030, 49510200, 49515210, 40, 920610, 0);
        $InitializeCommonEvent(0, 90015002, 0, 49510200, 0, 49515210, 1020, 920610, 110320, 905011000, 49510800);
        $InitializeCommonEvent(0, 90015470, 49512200, 49510200, 49510800, 49515210, 0, 0, 49515210);
        $InitializeCommonEvent(0, 90015446, 49515210, 49510200, 49510800, 49512200);
        $InitializeCommonEvent(0, 90015460, 49512200, 49510800);
        $InitializeCommonEvent(0, 90015460, 49512200, 0);
        $InitializeCommonEvent(0, 90015460, 49512200, 0);
    }
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015475, 49512200, 49510800);
        $InitializeCommonEvent(0, 90015475, 49512200, 0);
        $InitializeCommonEvent(0, 90015475, 49512200, 0);
    }
    $InitializeCommonEvent(0, 90035001, 49510800);
    if (1 == 1) {
        $InitializeCommonEvent(0, 90015070, 1056402601, 49510000, 49510300);
        $InitializeCommonEvent(0, 90015070, 1028402600, 49510000, 49510300);
    }
    if (1 == 2) {
        $InitializeCommonEvent(0, 90015070, 1056402602, 49510000, 49510300);
        $InitializeCommonEvent(0, 90015070, 1028402601, 49510000, 49510300);
    }
    if (1 == 3) {
        $InitializeCommonEvent(0, 90015070, 1056402603, 49510000, 49510300);
        $InitializeCommonEvent(0, 90015070, 1028402602, 49510000, 49510300);
    }
    if (2 == 1) {
        $InitializeCommonEvent(0, 90015070, 1056402601, 49510000, 49510301);
        $InitializeCommonEvent(0, 90015070, 1028402600, 49510000, 49510301);
    }
    if (2 == 2) {
        $InitializeCommonEvent(0, 90015070, 1056402602, 49510000, 49510301);
        $InitializeCommonEvent(0, 90015070, 1028402601, 49510000, 49510301);
    }
    if (2 == 3) {
        $InitializeCommonEvent(0, 90015070, 1056402603, 49510000, 49510301);
        $InitializeCommonEvent(0, 90015070, 1028402602, 49510000, 49510301);
    }
});

$Event(495102800, Default, function(chrEntityId, assetEntityId, chrEntityId2, eventFlagId, eventFlagId2, eventFlagId3) {
    EndIf(EventFlag(eventFlagId));
    EndIf(EventFlag(eventFlagId2));
    WaitFor(HPRatio(chrEntityId) <= 0);
    WaitFixedTimeSeconds(4);
    WaitFor(CharacterDead(chrEntityId));
    DisplayBossHealthBar(Disabled, chrEntityId, 0, 0);
    if (assetEntityId != 0) {
        EnableAsset(assetEntityId);
    }
    if (chrEntityId2 != 0) {
        EnableCharacter(chrEntityId2);
    }
    if (!EventFlag(eventFlagId3)) {
        SetEventFlagID(eventFlagId, ON);
        EndEvent();
    }
    SetEventFlagID(eventFlagId2, ON);
    WaitFor(ElapsedSeconds(3));
    DisableCharacter(chrEntityId);
});

$Event(49512810, Restart, function(chrEntityId, eventFlagId, eventFlagId2, eventFlagId3, nameId, eventFlagId4, eventFlagId5) {
    if (EventFlag(eventFlagId4) || EventFlag(eventFlagId5)) {
        DisableCharacter(chrEntityId);
        DisableCharacterCollision(chrEntityId);
        ForceCharacterDeath(chrEntityId, false);
        EndEvent();
    }
L0:
    DisableCharacter(chrEntityId);
    DisableCharacterCollision(chrEntityId);
    DisableCharacterAI(chrEntityId);
    flag = EventFlag(7515) && (EventFlag(eventFlagId) || EventFlag(eventFlagId2));
    WaitFor(EventFlag(eventFlagId3));
    WaitFixedTimeSeconds(1);
    EnableCharacter(chrEntityId);
    EnableCharacterCollision(chrEntityId);
    EnableCharacterAI(chrEntityId);
    ForceAnimationPlayback(49510800, 20012, false, false, false);
    DisableCharacterHPBarDisplay(chrEntityId);
    DisableCharacterHPBarDisplay(49510801);
    EnableCharacterAI(chrEntityId);
    SetNetworkUpdateRate(49510800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, chrEntityId, 0, nameId);
});
