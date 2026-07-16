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
        if (EventFlag(49660000)) {
            $InitializeCommonEvent(0, 90055000, 49665200, 1, 49662200, 49660201);
            $InitializeCommonEvent(0, 90055001, 49665200, 1, 49660201, 49660200);
        }
        if (EventFlag(49660001)) {
            $InitializeCommonEvent(0, 90055000, 49665200, 2, 49662200, 49660201);
            $InitializeCommonEvent(0, 90055001, 49665200, 2, 49660201, 49660200);
        }
    }
    if (IsMapVariation(1)) {
        $InitializeCommonEvent(0, 90035000, 49660200);
    }
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015442, 49662200, 49660200);
    }

    // Phase 2 spawn in event
    $InitializeCommonEvent(0, 90065124, 49660200, 49660205, 49660800, 100600, 690048, 49665210, 49660800, 904970000, 49660810, 904971000, 0, 0);
    $InitializeCommonEvent(0, 90065911, 49660200, 49660800, 100600, 49665210, 49660800, 904970000, 49660810, 904971000, 0, 0, 0);
    
    // Set BGM for phase 1 and 2
    $InitializeCommonEvent(0, 90065126, 49660800);
    // Set BGM for phase 3 
    $InitializeCommonEvent(0, 90065127, 49660810);
    // Stop BGM on death
    $InitializeCommonEvent(0, 90065129, 49660810);    
    
    if (!IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90065900, 49660800, 2, 0, 0, 1050, 100600, 904970000, 49660800);
    }
    $InitializeCommonEvent(0, 90015012, 49665210, 49660200);
    $InitializeCommonEvent(1, 90015012, 0, 49660200);
    $InitializeCommonEvent(0, 90015020, 49660200, 49660800);
    $InitializeCommonEvent(0, 90015008, 49660205, 49660800, 100600, 49665210, 14601, 0);
    if (!IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90065123, 49660800, 49660810, 49660200, 49660800, 904971000, 49660206);
    }
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90065125, 49660800, 49660810, 49660200, 49660800, 904971000, 49660206, 49660207);
    }
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015443, 49662200, 49660800);
        $InitializeCommonEvent(0, 90015023, 49660200, 40, 0, 49665210, 49660800, 904970000, 0, 0, 0, 0);
        $InitializeCommonEvent(0, 90015026, 49660206, 40, 0, 49665210, 49660810, 904971000);
        $InitializeCommonEvent(0, 90015030, 49660200, 49665210, 40, 100600, 0);
        $InitializeCommonEvent(0, 90015002, 0, 49660200, 0, 49665210, 1020, 100600, 110320, 904970000, 49660800);
        $InitializeCommonEvent(0, 90015470, 49662200, 49660200, 49660800, 49665210, 0, 0, 49665210);
        $InitializeCommonEvent(0, 90015478, 49660800, 49660800);
        $InitializeCommonEvent(0, 90015478, 49660810, 49660800);        
    }
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015446, 49665210, 49660200, 49660800, 49662200);
    }
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015460, 49662200, 49660800);
        $InitializeCommonEvent(0, 90015460, 49662200, 49660810);
        $InitializeCommonEvent(0, 90015460, 49662200, 0);
    }
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015475, 49662200, 49660800);
        $InitializeCommonEvent(0, 90015475, 49662200, 49660810);
        $InitializeCommonEvent(0, 90015475, 49662200, 0);
    }
    $InitializeCommonEvent(0, 90035001, 49660800);
    if (2 == 1) {
        $InitializeCommonEvent(0, 90015070, 1056402601, 49660000, 49660300);
        $InitializeCommonEvent(0, 90015070, 1028402600, 49660000, 49660300);
    }
    if (2 == 2) {
        $InitializeCommonEvent(0, 90015070, 1056402602, 49660000, 49660300);
        $InitializeCommonEvent(0, 90015070, 1028402601, 49660000, 49660300);
    }
    if (2 == 3) {
        $InitializeCommonEvent(0, 90015070, 1056402603, 49660000, 49660300);
        $InitializeCommonEvent(0, 90015070, 1028402602, 49660000, 49660300);
    }
    if (3 == 1) {
        $InitializeCommonEvent(0, 90015070, 1056402601, 49660000, 49660301);
        $InitializeCommonEvent(0, 90015070, 1028402600, 49660000, 49660301);
    }
    if (3 == 2) {
        $InitializeCommonEvent(0, 90015070, 1056402602, 49660000, 49660301);
        $InitializeCommonEvent(0, 90015070, 1028402601, 49660000, 49660301);
    }
    if (3 == 3) {
        $InitializeCommonEvent(0, 90015070, 1056402603, 49660000, 49660301);
        $InitializeCommonEvent(0, 90015070, 1028402602, 49660000, 49660301);
    }
});

$Event(49662800, Default, function(chrEntityId, assetEntityId, chrEntityId2, eventFlagId, eventFlagId2, eventFlagId3, chrEntityId3) {
    EndIf(EventFlag(eventFlagId));
    EndIf(EventFlag(eventFlagId2));
    WaitFor(HPRatio(chrEntityId) <= 0);
    WaitFor(HPRatio(chrEntityId3) <= 0);
    WaitFixedTimeSeconds(4);
    WaitFor(CharacterDead(chrEntityId));
    DisplayBossHealthBar(Disabled, chrEntityId, 0, 902500520);
    DisplayBossHealthBar(Disabled, chrEntityId3, 1, 902500520);
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
    DisableCharacter(chrEntityId3);
});

$Event(49662810, Restart, function(chrEntityId, eventFlagId, eventFlagId2, eventFlagId3, nameId, eventFlagId4, eventFlagId5, chrEntityId2) {
    if (EventFlag(eventFlagId4) || EventFlag(eventFlagId5)) {
        DisableCharacter(chrEntityId);
        DisableCharacter(chrEntityId2);
        DisableCharacterCollision(chrEntityId);
        DisableCharacterCollision(chrEntityId2);
        ForceCharacterDeath(chrEntityId, false);
        ForceCharacterDeath(chrEntityId2, false);
        EndEvent();
    }
L0:
    DisableCharacter(chrEntityId);
    DisableCharacter(chrEntityId2);
    DisableCharacterCollision(chrEntityId);
    DisableCharacterCollision(chrEntityId2);
    DisableCharacterAI(chrEntityId);
    DisableCharacterAI(chrEntityId2);
    flag = EventFlag(7515) && (EventFlag(eventFlagId) || EventFlag(eventFlagId2));
    WaitFor(EventFlag(eventFlagId3));
    WaitFixedTimeSeconds(1);
    EnableCharacter(chrEntityId);
    EnableCharacter(chrEntityId2);
    EnableCharacterCollision(chrEntityId);
    EnableCharacterCollision(chrEntityId2);
    EnableCharacterAI(chrEntityId);
    EnableCharacterAI(chrEntityId2);
    //ForceAnimationPlayback(49660800, 20005, false, false, false);
    DisableCharacterHPBarDisplay(chrEntityId);
    DisableCharacterHPBarDisplay(chrEntityId2);
    EnableCharacterAI(chrEntityId);
    EnableCharacterAI(chrEntityId2);
    SetNetworkUpdateRate(49660800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, chrEntityId, 0, nameId);
    DisplayBossHealthBar(Enabled, chrEntityId2, 0, nameId);
});
