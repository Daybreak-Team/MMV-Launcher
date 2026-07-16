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
        if (EventFlag(49620000)) {
            $InitializeCommonEvent(0, 90055000, 49625200, 1, 49622200, 49620201);
            $InitializeCommonEvent(0, 90055001, 49625200, 1, 49620201, 49620200);
        }
        if (EventFlag(49620001)) {
            $InitializeCommonEvent(0, 90055000, 49625200, 2, 49622200, 49620201);
            $InitializeCommonEvent(0, 90055001, 49625200, 2, 49620201, 49620200);
        }
    }
    if (IsMapVariation(1)) {
        $InitializeCommonEvent(0, 90035000, 49620200);
    }
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015442, 49622200, 49620200);
    }
    $InitializeCommonEvent(0, 90065910, 49620200, 49622205, 49620800, 950000, 690047, 49620800, 49620800, 904972000, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90065911, 49620200, 49620800, 950000, 49620800, 49620800, 904972000, 0, 0, 0, 0, 0);
    if (!IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90065900, 49620800, 2, 0, 0, 1050, 950000, 904972000, 49620800);
    }
    $InitializeCommonEvent(0, 90015012, 49620800, 49620200);
    $InitializeCommonEvent(0, 90015020, 49620200, 49620800);
    $InitializeCommonEvent(0, 90015008, 49622205, 49620800, 950000, 49620800, 16230, 0);
    $InitializeCommonEvent(0, 90065920, 49620800, 7315);
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015443, 49622200, 49620800);
        $InitializeCommonEvent(0, 90015023, 49620200, 40, 0, 49620800, 49620800, 904972000, 0, 0, 0, 0);
        $InitializeCommonEvent(0, 90015030, 49620200, 49620800, 40, 950000, 0);
        $InitializeCommonEvent(0, 90015002, 0, 49620200, 49620800, 49620800, 1020, 950000, 110320, 904972000, 49620800);
        $InitializeCommonEvent(0, 90015470, 49622200, 49620200, 49620800, 49620800, 0, 0, 0);
        $InitializeCommonEvent(0, 90015476, 10002, 49622200);
        $InitializeCommonEvent(0, 90015476, 10003, 49622200);
        $InitializeCommonEvent(0, 90015476, 10004, 49622200);
        $InitializeCommonEvent(0, 90065140, 49620800);
    }
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015446, 49620800, 49620200, 49620800, 49622200);
    }
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015460, 49622200, 49620800);
    }
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015475, 49622200, 49620800);
    }
    $InitializeCommonEvent(0, 90035001, 49620800);
    if (2 == 1) {
        $InitializeCommonEvent(0, 90015070, 1056402601, 49620000, 49620300);
        $InitializeCommonEvent(0, 90015070, 1028402600, 49620000, 49620300);
    }
    if (2 == 2) {
        $InitializeCommonEvent(0, 90015070, 1056402602, 49620000, 49620300);
        $InitializeCommonEvent(0, 90015070, 1028402601, 49620000, 49620300);
    }
    if (2 == 3) {
        $InitializeCommonEvent(0, 90015070, 1056402603, 49620000, 49620300);
        $InitializeCommonEvent(0, 90015070, 1028402602, 49620000, 49620300);
    }
    if (3 == 1) {
        $InitializeCommonEvent(0, 90015070, 1056402601, 49620000, 49620301);
        $InitializeCommonEvent(0, 90015070, 1028402600, 49620000, 49620301);
    }
    if (3 == 2) {
        $InitializeCommonEvent(0, 90015070, 1056402602, 49620000, 49620301);
        $InitializeCommonEvent(0, 90015070, 1028402601, 49620000, 49620301);
    }
    if (3 == 3) {
        $InitializeCommonEvent(0, 90015070, 1056402603, 49620000, 49620301);
        $InitializeCommonEvent(0, 90015070, 1028402602, 49620000, 49620301);
    }
});

$Event(49622800, Default, function(chrEntityId, assetEntityId, chrEntityId2, eventFlagId, eventFlagId2, eventFlagId3) {
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

$Event(49622810, Restart, function(chrEntityId, eventFlagId, eventFlagId2, eventFlagId3, nameId, eventFlagId4, eventFlagId5) {
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
    ForceAnimationPlayback(49620800, 20005, false, false, false);
    DisableCharacterHPBarDisplay(chrEntityId);
    DisableCharacterHPBarDisplay(49620801);
    CreateReferredDamagePair(49620801, chrEntityId);
    CreateReferredDamagePair(49620802, chrEntityId);
    EnableCharacterAI(chrEntityId);
    SetNetworkUpdateRate(49620800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, chrEntityId, 0, nameId);
});


