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
        if (EventFlag(49600000)) {
            $InitializeCommonEvent(0, 90055000, 49605200, 1, 49602200, 49600201);
            $InitializeCommonEvent(0, 90055001, 49605200, 1, 49600201, 49600200);
        }
        if (EventFlag(49600001)) {
            $InitializeCommonEvent(0, 90055000, 49605200, 2, 49602200, 49600201);
            $InitializeCommonEvent(0, 90055001, 49605200, 2, 49600201, 49600200);
        }
    }
    if (IsMapVariation(1)) {
        $InitializeCommonEvent(0, 90035000, 49600200);
    }
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015442, 49602200, 49600200);
    }
    $InitializeCommonEvent(0, 90065910, 49600200, 49600205, 49600800, 467010, 690047, 49605210, 49600800, 904960000, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90065911, 49600200, 49600800, 467010, 49605210, 49600800, 904960000, 0, 0, 0, 0, 0);
    
    // Animal spawn and despawn
    //$InitializeCommonEvent(0, 90065128, 49606000);
    
    if (!IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90065900, 49600800, 1, 0, 0, 1050, 467010, 904960000, 49600800);
    }
    $InitializeCommonEvent(0, 90015012, 49605210, 49600200);
    $InitializeCommonEvent(1, 90015012, 0, 49600200);
    $InitializeCommonEvent(0, 90015020, 49600200, 49600800);
    $InitializeCommonEvent(0, 90015008, 49600205, 49600800, 467010, 49600800, 14771, 0);
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015443, 49602200, 49600800);
        $InitializeCommonEvent(0, 90015023, 49600200, 40, 0, 49605210, 49600800, 904960000, 0, 0, 0, 0);
        $InitializeCommonEvent(0, 90015030, 49600200, 49605210, 40, 467010, 0);
        $InitializeCommonEvent(0, 90015002, 0, 49600200, 0, 49605210, 1020, 467010, 110320, 904960000, 49600800);
        $InitializeCommonEvent(0, 90015470, 49602200, 49600200, 49600800, 49605210, 0, 0, 49605210);
        $InitializeCommonEvent(0, 90015446, 49605210, 49600200, 49600800, 49602200);
        $InitializeCommonEvent(0, 90015460, 49602200, 49600800);
        $InitializeCommonEvent(0, 90015460, 49602200, 0);
        $InitializeCommonEvent(0, 90015460, 49602200, 0);
    }
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015475, 49602200, 49600800);
        $InitializeCommonEvent(0, 90015475, 49602200, 0);
        $InitializeCommonEvent(0, 90015475, 49602200, 0);
    }
    $InitializeCommonEvent(0, 90035001, 49600800);
    if (1 == 1) {
        $InitializeCommonEvent(0, 90015070, 1056402601, 49600000, 49600300);
        $InitializeCommonEvent(0, 90015070, 1028402600, 49600000, 49600300);
    }
    if (1 == 2) {
        $InitializeCommonEvent(0, 90015070, 1056402602, 49600000, 49600300);
        $InitializeCommonEvent(0, 90015070, 1028402601, 49600000, 49600300);
    }
    if (1 == 3) {
        $InitializeCommonEvent(0, 90015070, 1056402603, 49600000, 49600300);
        $InitializeCommonEvent(0, 90015070, 1028402602, 49600000, 49600300);
    }
    if (2 == 1) {
        $InitializeCommonEvent(0, 90015070, 1056402601, 49600000, 49600301);
        $InitializeCommonEvent(0, 90015070, 1028402600, 49600000, 49600301);
    }
    if (2 == 2) {
        $InitializeCommonEvent(0, 90015070, 1056402602, 49600000, 49600301);
        $InitializeCommonEvent(0, 90015070, 1028402601, 49600000, 49600301);
    }
    if (2 == 3) {
        $InitializeCommonEvent(0, 90015070, 1056402603, 49600000, 49600301);
        $InitializeCommonEvent(0, 90015070, 1028402602, 49600000, 49600301);
    }
});

$Event(496002800, Default, function(chrEntityId, assetEntityId, chrEntityId2, eventFlagId, eventFlagId2, eventFlagId3) {
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

$Event(49602810, Restart, function(chrEntityId, eventFlagId, eventFlagId2, eventFlagId3, nameId, eventFlagId4, eventFlagId5) {
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
    ForceAnimationPlayback(49600800, 20000, false, false, false);
    DisableCharacterHPBarDisplay(chrEntityId);
    DisableCharacterHPBarDisplay(49600801);
    EnableCharacterAI(chrEntityId);
    SetNetworkUpdateRate(49600800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, chrEntityId, 0, nameId);
});
