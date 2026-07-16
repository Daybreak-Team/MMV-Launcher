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
        if (EventFlag(49550000)) {
            $InitializeCommonEvent(0, 90055000, 49555200, 1, 49552200, 49550201);
            $InitializeCommonEvent(0, 90055001, 49555200, 1, 49550201, 49550200);
        }
        if (EventFlag(49550001)) {
            $InitializeCommonEvent(0, 90055000, 49555200, 2, 49552200, 49550201);
            $InitializeCommonEvent(0, 90055001, 49555200, 2, 49550201, 49550200);
        }
    }
    if (IsMapVariation(1)) {
        $InitializeCommonEvent(0, 90035000, 49550200);
    }
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015442, 49552200, 49550200);
    }
    $InitializeCommonEvent(0, 90065910, 49550200, 49552205, 49550800, 921300, 690047, 49550800, 49550800, 904510603, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90065911, 49550200, 49550800, 921300, 49550800, 49550800, 904510603, 0, 0, 0, 0, 0);
    if (!IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90065900, 49550800, 2, 0, 0, 1050, 921300, 904510603, 49550800);
    }
    $InitializeCommonEvent(0, 90015012, 49550800, 49550200);
    $InitializeCommonEvent(0, 90015020, 49550200, 49550800);
    $InitializeCommonEvent(0, 90015008, 49552205, 49550800, 921300, 49550800, 16230, 0);
    $InitializeCommonEvent(0, 90065920, 49550800, 7315);
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015443, 49552200, 49550800);
        $InitializeCommonEvent(0, 90015023, 49550200, 40, 0, 49550800, 49550800, 904510603, 0, 0, 0, 0);
        $InitializeCommonEvent(0, 90015030, 49550200, 49550800, 40, 921300, 0);
        $InitializeCommonEvent(0, 90015002, 0, 49550200, 49550800, 49550800, 1020, 921300, 110320, 904510603, 49550800);
        $InitializeCommonEvent(0, 90015470, 49552200, 49550200, 49550800, 49550800, 0, 0, 0);
        $InitializeCommonEvent(0, 90015476, 10002, 49552200);
        $InitializeCommonEvent(0, 90015476, 10003, 49552200);
        $InitializeCommonEvent(0, 90015476, 10004, 49552200);
        $InitializeCommonEvent(0, 90065140, 49550800);
    }
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015446, 49550800, 49550200, 49550800, 49552200);
    }
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015460, 49552200, 49550800);
    }
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015475, 49552200, 49550800);
    }
    $InitializeCommonEvent(0, 90035001, 49550800);
    if (2 == 1) {
        $InitializeCommonEvent(0, 90015070, 1056402601, 49550000, 49550300);
        $InitializeCommonEvent(0, 90015070, 1028402600, 49550000, 49550300);
    }
    if (2 == 2) {
        $InitializeCommonEvent(0, 90015070, 1056402602, 49550000, 49550300);
        $InitializeCommonEvent(0, 90015070, 1028402601, 49550000, 49550300);
    }
    if (2 == 3) {
        $InitializeCommonEvent(0, 90015070, 1056402603, 49550000, 49550300);
        $InitializeCommonEvent(0, 90015070, 1028402602, 49550000, 49550300);
    }
    if (3 == 1) {
        $InitializeCommonEvent(0, 90015070, 1056402601, 49550000, 49550301);
        $InitializeCommonEvent(0, 90015070, 1028402600, 49550000, 49550301);
    }
    if (3 == 2) {
        $InitializeCommonEvent(0, 90015070, 1056402602, 49550000, 49550301);
        $InitializeCommonEvent(0, 90015070, 1028402601, 49550000, 49550301);
    }
    if (3 == 3) {
        $InitializeCommonEvent(0, 90015070, 1056402603, 49550000, 49550301);
        $InitializeCommonEvent(0, 90015070, 1028402602, 49550000, 49550301);
    }
});

$Event(49552800, Default, function(chrEntityId, assetEntityId, chrEntityId2, eventFlagId, eventFlagId2, eventFlagId3) {
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

$Event(49552810, Restart, function(chrEntityId, eventFlagId, eventFlagId2, eventFlagId3, nameId, eventFlagId4, eventFlagId5) {
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
    ForceAnimationPlayback(49550800, 20005, false, false, false);
    DisableCharacterHPBarDisplay(chrEntityId);
    DisableCharacterHPBarDisplay(49550801);
    CreateReferredDamagePair(49550801, chrEntityId);
    CreateReferredDamagePair(49550802, chrEntityId);
    EnableCharacterAI(chrEntityId);
    SetNetworkUpdateRate(49550800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, chrEntityId, 0, nameId);
});


