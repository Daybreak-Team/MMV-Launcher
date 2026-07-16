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
        if (EventFlag(49560000)) {
            $InitializeCommonEvent(0, 90055000, 49565200, 1, 49562200, 49560201);
            $InitializeCommonEvent(0, 90055001, 49565200, 1, 49560201, 49560200);
        }
        if (EventFlag(49560001)) {
            $InitializeCommonEvent(0, 90055000, 49565200, 2, 49562200, 49560201);
            $InitializeCommonEvent(0, 90055001, 49565200, 2, 49560201, 49560200);
        }
    }
    if (IsMapVariation(1)) {
        $InitializeCommonEvent(0, 90035000, 49560200);
    }
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015442, 49562200, 49560200);
    }
    $InitializeCommonEvent(0, 90065910, 49560200, 49560205, 49560800, 950000, 690047, 49565210, 49560800, 904956000, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90065911, 49560200, 49560800, 950000, 49565210, 49560800, 904956000, 0, 0, 0, 0, 0);
    if (!IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90065900, 49560800, 2, 0, 0, 1050, 950000, 904956000, 49560800);
    }
    $InitializeCommonEvent(0, 90015012, 49565210, 49560200);
    $InitializeCommonEvent(1, 90015012, 0, 49560200);
    $InitializeCommonEvent(0, 90015020, 49560200, 49560800);
    $InitializeCommonEvent(0, 90065133);
    $InitializeCommonEvent(0, 90065134);
    $InitializeCommonEvent(0, 90065136);
    $InitializeCommonEvent(0, 90065135);
    $InitializeCommonEvent(0, 90015008, 49560205, 49560800, 475000, 49560800, 14771, 0);
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015443, 49562200, 49560800);
        $InitializeCommonEvent(0, 90015023, 49560200, 40, 0, 49565210, 49560800, 904956000, 0, 0, 0, 0);
        $InitializeCommonEvent(0, 90015030, 49560200, 49565210, 40, 950000, 0);
        $InitializeCommonEvent(0, 90015002, 0, 49560200, 0, 49565210, 1020, 950000, 110320, 904956000, 49560800);
        $InitializeCommonEvent(0, 90015470, 49562200, 49560200, 49560800, 49565210, 0, 0, 49565210);
        $InitializeCommonEvent(0, 90015446, 49565210, 49560200, 49560800, 49562200);
        $InitializeCommonEvent(0, 90015460, 49562200, 49560800);
        $InitializeCommonEvent(0, 90015460, 49562200, 0);
        $InitializeCommonEvent(0, 90015460, 49562200, 0);
    }
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015475, 49562200, 49560800);
        $InitializeCommonEvent(0, 90015475, 49562200, 0);
        $InitializeCommonEvent(0, 90015475, 49562200, 0);
    }
    $InitializeCommonEvent(0, 90035001, 49560800);
    if (2 == 1) {
        $InitializeCommonEvent(0, 90015070, 1056402601, 49560000, 49560300);
        $InitializeCommonEvent(0, 90015070, 1028402600, 49560000, 49560300);
    }
    if (2 == 2) {
        $InitializeCommonEvent(0, 90015070, 1056402602, 49560000, 49560300);
        $InitializeCommonEvent(0, 90015070, 1028402601, 49560000, 49560300);
    }
    if (2 == 3) {
        $InitializeCommonEvent(0, 90015070, 1056402603, 49560000, 49560300);
        $InitializeCommonEvent(0, 90015070, 1028402602, 49560000, 49560300);
    }
    if (3 == 1) {
        $InitializeCommonEvent(0, 90015070, 1056402601, 49560000, 49560301);
        $InitializeCommonEvent(0, 90015070, 1028402600, 49560000, 49560301);
    }
    if (3 == 2) {
        $InitializeCommonEvent(0, 90015070, 1056402602, 49560000, 49560301);
        $InitializeCommonEvent(0, 90015070, 1028402601, 49560000, 49560301);
    }
    if (3 == 3) {
        $InitializeCommonEvent(0, 90015070, 1056402603, 49560000, 49560301);
        $InitializeCommonEvent(0, 90015070, 1028402602, 49560000, 49560301);
    }
});

$Event(495602800, Default, function(chrEntityId, assetEntityId, chrEntityId2, eventFlagId, eventFlagId2, eventFlagId3) {
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

$Event(49562810, Restart, function(chrEntityId, eventFlagId, eventFlagId2, eventFlagId3, nameId, eventFlagId4, eventFlagId5) {
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
    ForceAnimationPlayback(49560800, 20012, false, false, false);
    DisableCharacterHPBarDisplay(chrEntityId);
    DisableCharacterHPBarDisplay(49560801);
    EnableCharacterAI(chrEntityId);
    SetNetworkUpdateRate(49560800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, chrEntityId, 0, nameId);
});
